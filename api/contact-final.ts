import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  console.log('Received request:', req.method, req.url);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed',
      method: req.method 
    });
  }

  try {
    // Basic validation
    const { name, phone, email } = req.body || {};
    
    if (!name || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name, phone and email are required',
        received: { name, phone, email }
      });
    }

    // Send Telegram notification
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      try {
        const message = `
🚗 New Contact Form Submission

Name: ${name}
Phone: ${phone}  
Email: ${email}
Vehicle: ${req.body.vehicle || 'Not specified'}
Service: ${req.body.service || 'Not specified'}
Message: ${req.body.message || 'No message'}

Time: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PST
        `.trim();

        const telegramResponse = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: message,
            disable_web_page_preview: true
          })
        });

        if (telegramResponse.ok) {
          console.log('✅ Telegram notification sent');
        } else {
          console.error('❌ Telegram failed:', await telegramResponse.text());
        }
      } catch (telegramError) {
        console.error('❌ Telegram error:', telegramError);
      }
    } else {
      console.log('⚠️ Telegram not configured');
    }

    return res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      id: `contact_${Date.now()}`,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Handler error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
}