interface TelegramMessage {
  chat_id: string;
  text: string;
  parse_mode?: 'HTML' | 'Markdown';
}

interface ContactNotification {
  name: string;
  phone: string;
  email: string;
  vehicle?: string;
  service?: string;
  message?: string;
  createdAt: Date;
}

export async function sendTelegramNotification(contact: ContactNotification): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  let chatId = process.env.TELEGRAM_CHAT_ID;

  // Используем правильный Chat ID если в переменной окружения неправильное значение
  if (chatId === "AKDetailingNotificationsbot" || !chatId || isNaN(Number(chatId))) {
    chatId = "197840565"; // Правильный Chat ID
    console.log('Using correct Chat ID:', chatId);
  }

  if (!botToken) {
    console.log('Telegram bot token not configured - skipping notification');
    return false;
  }

  const messageText = formatContactMessage(contact);
  
  const telegramMessage: TelegramMessage = {
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

function formatContactMessage(contact: ContactNotification): string {
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