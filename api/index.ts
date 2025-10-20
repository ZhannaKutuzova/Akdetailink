import express, { Request, Response, NextFunction } from "express";
import { z } from "zod";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Trust proxy for Vercel
app.set('trust proxy', 1);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from dist/public
const staticPath = path.join(__dirname, '../dist/public');
app.use(express.static(staticPath));

// CORS for Vercel
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin || origin.includes('.vercel.app') || origin.includes('akdetailing') || origin.includes('localhost')) {
    res.header('Access-Control-Allow-Origin', origin || '*');
  }
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-admin-key');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().optional(),
  vehicleType: z.string().optional(),
  vehicleMake: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
  website: z.string().optional(),
});

// Rate limiting
const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Too many contact submissions. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Health check
app.get("/healthz", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/readyz", (req, res) => {
  res.status(200).json({ status: "ready", timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post("/api/contact", contactRateLimit, async (req, res) => {
  try {
    const validatedData = contactFormSchema.parse(req.body);
    
    if (validatedData.website) {
      console.log("Potential bot submission detected");
      return res.json({ success: true, message: "Contact form submitted successfully" });
    }

    const { website, vehicleType, vehicleMake, ...contactData } = validatedData;
    const vehicle = [vehicleType, vehicleMake].filter(Boolean).join(" - ");

    // Send Telegram notification
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID || "197840565";

    if (botToken) {
      const messageText = `🚗 <b>Новая заявка - AK Detailing</b>\n\n` +
        `👤 <b>Клиент:</b> ${contactData.name}\n` +
        `📱 <b>Телефон:</b> <a href="tel:${contactData.phone}">${contactData.phone}</a>\n` +
        (contactData.email ? `📧 <b>Email:</b> ${contactData.email}\n` : '') +
        (vehicle ? `🚙 <b>Автомобиль:</b> ${vehicle}\n` : '') +
        (contactData.service ? `🔧 <b>Услуга:</b> ${contactData.service}\n` : '') +
        (contactData.message ? `💬 <b>Сообщение:</b>\n${contactData.message}\n` : '') +
        `\n⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'America/Los_Angeles' })}`;

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
          parse_mode: 'HTML'
        })
      }).catch(err => console.error('Telegram error:', err));
    }

    res.json({ success: true, message: "Contact form submitted successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, message: "Invalid form data", errors: error.errors });
    } else {
      console.error("Contact form error:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
});

// SPA fallback - serve index.html for all other routes
app.get('*', (req, res, next) => {
  // Skip API routes
  if (req.path.startsWith('/api/') || req.path.startsWith('/healthz') || req.path.startsWith('/readyz')) {
    return next();
  }
  
  // Serve index.html for all other routes
  const indexPath = path.join(__dirname, '../dist/public/index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).json({ error: 'Failed to load page', path: req.path });
    }
  });
});

// Error handler
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});

export default app;