import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import rateLimit from "express-rate-limit";
import { storage } from "./storage";
import { sendTelegramNotification } from "./telegram";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Valid email is required"),
  vehicle: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
  // Honeypot field - should be empty
  website: z.string().optional(),
});

// Rate limiting for contact form
const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: "Too many contact submissions. Please try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Health check endpoints
  app.get("/healthz", (req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.get("/readyz", async (req, res) => {
    try {
      // Try to fetch contacts to test DB connection
      await storage.getAllContacts();
      res.status(200).json({ 
        status: "ready", 
        database: "connected",
        timestamp: new Date().toISOString() 
      });
    } catch (error) {
      console.error("Database health check failed:", error);
      res.status(503).json({ 
        status: "not ready", 
        database: "disconnected",
        timestamp: new Date().toISOString() 
      });
    }
  });
  
  // Contact form submission endpoint with rate limiting
  app.post("/api/contact", contactRateLimit, async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Honeypot check - if website field is filled, it's likely a bot
      if (validatedData.website) {
        // Log potential bot attempt but return success to not reveal honeypot
        console.log("Potential bot submission detected:", req.ip);
        return res.json({ 
          success: true, 
          message: "Contact form submitted successfully"
        });
      }

      // Remove honeypot field before storing
      const { website, ...contactData } = validatedData;
      
      // Store the contact submission
      const contact = await storage.createContact(contactData);
      
      // Send Telegram notification
      await sendTelegramNotification({
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        vehicle: contact.vehicle || undefined,
        service: contact.service || undefined,
        message: contact.message || undefined,
        createdAt: contact.createdAt
      });
      
      console.log("New contact submission:", contact);
      
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Test Telegram notification endpoint
  app.post("/api/test-telegram", async (req, res) => {
    try {
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      let chatId = process.env.TELEGRAM_CHAT_ID;
      
      // Временное решение: если chatId неправильный, используем правильный
      if (chatId === "AKDetailingNotificationsbot" || !chatId || isNaN(Number(chatId))) {
        chatId = "197840565";
        console.log("Using correct Chat ID temporarily:", chatId);
      }
      
      if (!botToken) {
        return res.json({
          success: false,
          message: "Bot token not configured",
          details: {
            hasToken: !!botToken,
            hasChatId: !!chatId
          }
        });
      }

      // Тестируем напрямую с правильным Chat ID
      const testMessage = {
        chat_id: chatId,
        text: `🚗 <b>Тест - AK Detailing</b>\n\n` +
              `👤 <b>Клиент:</b> Тест\n` +
              `📱 <b>Телефон:</b> <a href="tel:+1-702-518-6014">+1-702-518-6014</a>\n` +
              `📧 <b>Email:</b> test@example.com\n` +
              `🚙 <b>Автомобиль:</b> Tesla Model 3\n` +
              `🔧 <b>Услуга:</b> Коррекция лакокрасочного покрытия\n` +
              `💬 <b>Сообщение:</b>\nТестовое сообщение для проверки уведомлений\n\n` +
              `⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'America/Los_Angeles' })}`,
        parse_mode: 'HTML'
      };

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testMessage)
      });

      const result = await response.json();
      const success = response.ok && result.ok;
      
      if (!success) {
        console.error('Telegram API error:', result);
      }
      
      res.json({ 
        success,
        message: success ? "Тестовое уведомление отправлено!" : "Ошибка отправки уведомления",
        chatId: chatId.substring(0, 3) + "***",
        details: !success ? result : undefined
      });
    } catch (error) {
      console.error("Test notification error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Ошибка сервера" 
      });
    }
  });

  // Get Telegram bot info and recent updates
  app.get("/api/telegram-info", async (req, res) => {
    try {
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      
      if (!botToken) {
        return res.json({
          success: false,
          message: "Bot token not configured"
        });
      }

      // Get bot info
      const botInfoResponse = await fetch(`https://api.telegram.org/bot${botToken}/getMe`);
      const botInfo = await botInfoResponse.json();
      
      // Get recent updates
      const updatesResponse = await fetch(`https://api.telegram.org/bot${botToken}/getUpdates`);
      const updates = await updatesResponse.json();
      
      res.json({
        success: true,
        botInfo,
        updates,
        instructions: "Напишите боту сообщение, затем посмотрите chat.id в updates для получения CHAT_ID"
      });
    } catch (error) {
      console.error("Telegram info error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Ошибка получения информации" 
      });
    }
  });

  // Get all contact submissions (admin only)
  app.get("/api/contacts", async (req, res) => {
    // Basic admin authentication
    const adminKey = req.headers['x-admin-key'];
    if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = Math.min(parseInt(req.query.limit as string) || 20, 100);
      
      const contacts = await storage.getAllContacts();
      const startIndex = (page - 1) * limit;
      const paginatedContacts = contacts.slice(startIndex, startIndex + limit);
      
      res.json({
        contacts: paginatedContacts,
        pagination: {
          page,
          limit,
          total: contacts.length,
          pages: Math.ceil(contacts.length / limit)
        }
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
