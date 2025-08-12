import { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from "zod";
import rateLimit from "express-rate-limit";

// Environment variables check
if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
  console.warn("Missing Telegram configuration. Notifications will be disabled.");
}

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"), 
  email: z.string().email("Valid email is required"),
  vehicle: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
  website: z.string().optional(), // Honeypot field
});

// Simple in-memory rate limiting for serverless
const rateLimitStore = new Map<string, { count: number; reset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;
  
  const key = ip;
  const current = rateLimitStore.get(key);
  
  if (!current || now > current.reset) {
    rateLimitStore.set(key, { count: 1, reset: now + windowMs });
    return true;
  }
  
  if (current.count >= maxRequests) {
    return false;
  }
  
  current.count++;
  return true;
}

async function sendTelegramNotification(contactData: any) {
  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    console.log("Telegram not configured, skipping notification");
    return;
  }

  try {
    const message = `
🚗 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${contactData.name}
📞 <b>Phone:</b> <a href="tel:${contactData.phone}">${contactData.phone}</a>
📧 <b>Email:</b> <a href="mailto:${contactData.email}">${contactData.email}</a>
🚙 <b>Vehicle:</b> ${contactData.vehicle || 'Not specified'}
🛠 <b>Service:</b> ${contactData.service || 'Not specified'}
💬 <b>Message:</b> ${contactData.message || 'No message'}

⏰ <b>Time:</b> ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST
    `.trim();

    const response = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    });

    if (response.ok) {
      console.log('✅ Telegram notification sent successfully');
    } else {
      const error = await response.text();
      console.error('❌ Telegram notification failed:', error);
    }
  } catch (error) {
    console.error('❌ Telegram notification error:', error);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Rate limiting
    const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 
               (req.headers['x-real-ip'] as string) || 
               'unknown';
    
    if (!checkRateLimit(ip)) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please try again later.'
      });
    }

    // Validate request body
    const validatedData = contactFormSchema.parse(req.body);

    // Check honeypot
    if (validatedData.website) {
      console.log('Bot detected via honeypot field');
      return res.status(400).json({
        success: false,
        message: 'Invalid submission detected'
      });
    }

    // Send Telegram notification
    await sendTelegramNotification(validatedData);

    // Generate unique ID
    const id = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    console.log('New contact submission:', {
      id,
      name: validatedData.name,
      phone: validatedData.phone,
      email: validatedData.email,
      vehicle: validatedData.vehicle,
      service: validatedData.service,
      timestamp: new Date().toISOString()
    });

    return res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Invalid form data',
        errors: error.errors
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}