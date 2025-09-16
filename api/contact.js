export default async function handler(req, res) {
  // Set CORS headers
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
    const { name, phone, email, vehicle, service, message } = req.body;

    // Basic validation
    if (!name || !phone || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, phone, and email are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please enter a valid email address' 
      });
    }

    // Honeypot check
    if (req.body.website) {
      console.log('Potential bot submission detected from IP:', req.headers['x-forwarded-for'] || req.connection.remoteAddress);
      return res.json({ success: true, message: 'Thank you for your message!' });
    }

    // Send Telegram notification
    const telegramSent = await sendTelegramNotification({
      name,
      phone,
      email,
      vehicle,
      service,
      message,
      createdAt: new Date()
    });

    if (telegramSent) {
      console.log('✅ Contact form submitted and Telegram notification sent');
    } else {
      console.log('⚠️ Contact form submitted but Telegram notification failed');
    }

    return res.json({ success: true, message: 'Thank you for your message!' });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'An error occurred while processing your request' 
    });
  }
}

async function sendTelegramNotification(contact) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  let chatId = process.env.TELEGRAM_CHAT_ID;

  // Use correct Chat ID if environment variable has wrong value
  if (chatId === "AKDetailingNotificationsbot" || !chatId || isNaN(Number(chatId))) {
    chatId = "197840565"; // Correct Chat ID
    console.log('Using correct Chat ID:', chatId);
  }

  if (!botToken) {
    console.log('Telegram bot token not configured - skipping notification');
    return false;
  }

  const messageText = formatContactMessage(contact);
  
  const telegramMessage = {
    chat_id: chatId,
    text: messageText,
    parse_mode: 'HTML'
  };

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(telegramMessage)
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Telegram API error:', error);
      return false;
    }

    console.log('✅ Telegram notification sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
    return false;
  }
}

function formatContactMessage(contact) {
  const time = contact.createdAt.toLocaleString('ru-RU', {
    timeZone: 'America/Los_Angeles',
    year: 'numeric',
    month: '2-digit', 
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  let message = `🚗 <b>Новая заявка - AK Detailing</b>\n\n`;
  message += `👤 <b>Клиент:</b> ${contact.name}\n`;
  message += `📱 <b>Телефон:</b> <a href="tel:${contact.phone}">${contact.phone}</a>\n`;
  message += `📧 <b>Email:</b> ${contact.email}\n`;
  
  if (contact.vehicle) {
    message += `🚙 <b>Автомобиль:</b> ${contact.vehicle}\n`;
  }
  
  if (contact.service) {
    message += `🔧 <b>Услуга:</b> ${contact.service}\n`;
  }
  
  if (contact.message) {
    message += `💬 <b>Сообщение:</b>\n${contact.message}\n`;
  }
  
  message += `\n⏰ <b>Время:</b> ${time}`;

  return message;
}