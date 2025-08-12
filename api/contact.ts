// api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

// --- ENV sanity check ---
if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
  console.warn('Missing Telegram configuration. Notifications will be disabled.');
}

// --- Schema ---
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Valid email is required'),
  vehicle: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
  website: z.string().optional(), // honeypot
});

// --- Simple in-memory rate limit (per runtime instance) ---
const rateLimitStore = new Map<string, { count: number; reset: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 min
  const maxRequests = 5;
  const curr = rateLimitStore.get(ip);
  if (!curr || now > curr.reset) {
    rateLimitStore.set(ip, { count: 1, reset: now + windowMs });
    return true;
  }
  if (curr.count >= maxRequests) return false;
  curr.count++;
  return true;
}

// --- Telegram ---
async function sendTelegramNotification(contactData: any) {
  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    console.log('Telegram not configured, skipping notification');
    return;
  }

  const time = new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
  });

  const message = `
🚗 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${contactData.name}
📞 <b>Phone:</b> <a href="tel:${contactData.phone}">${contactData.phone}</a>
📧 <b>Email:</b> <a href="mailto:${contactData.email}">${contactData.email}</a>
🚙 <b>Vehicle:</b> ${contactData.vehicle || 'Not specified'}
🛠 <b>Service:</b> ${contactData.service || 'Not specified'}
💬 <b>Message:</b> ${contactData.message || 'No message'}

⏰ <b>Time:</b> ${time} PST
`.trim();

  const resp = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    }
  );

  if (!resp.ok) {
    const errTxt = await resp.text();
    console.error('❌ Telegram notification failed:', errTxt);
  } else {
    console.log('✅ Telegram notification sent');
  }
}

// --- Handler ---
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS (на случай кросс-доменных тестов)
  const origin = req.headers.origin as string | undefined;
  if (origin) res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  console.log(`${req.method} /api/contact from ${origin || 'unknown'}`);

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')
    return res.status(405).json({ success: false, message: 'Method not allowed' });

  try {
    // Rate limit
    const ip =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      (req.headers['x-real-ip'] as string) ||
      'unknown';
    if (!checkRateLimit(ip)) {
      return res
        .status(429)
        .json({ success: false, message: 'Too many requests. Please try again later.' });
    }

    // Parse body (иногда body приходит строкой)
    const raw = req.body as any;
    const body = typeof raw === 'string' ? JSON.parse(raw) : raw;
    if (!body) return res.status(400).json({ success: false, message: 'Request body is required' });

    const data = contactFormSchema.parse(body);

    // honeypot
    if (data.website) {
      return res.status(400).json({ success: false, message: 'Invalid submission detected' });
    }

    await sendTelegramNotification(data);

    const id = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
    console.log('New contact submission:', {
      id,
      name: data.name,
      phone: data.phone,
      email: data.email,
      vehicle: data.vehicle,
      service: data.service,
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      id,
    });
  } catch (err: any) {
    if (err?.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid form data',
        errors: err.errors,
      });
    }
    console.error('Contact form error:', err);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? err?.message : undefined,
    });
  }
}
