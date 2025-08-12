import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import compression from "compression";
import path from "path";
import { registerRoutes } from "../server/routes";

const app = express();

// Trust proxy for Vercel
app.set('trust proxy', 1);

// Security middleware for Vercel
app.use(helmet({
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: false
}));
app.use(compression());

// CORS for Vercel deployment
app.use((req, res, next) => {
  const origin = req.headers.origin;
  
  // Allow same-origin and Vercel deployments
  if (!origin || origin.includes('.vercel.app') || origin.includes('akdetailing') || origin.includes('localhost')) {
    res.header('Access-Control-Allow-Origin', origin || '*');
  }
  
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-admin-key');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static files for Vercel
app.use(express.static(path.join(__dirname, '../dist/public')));

// API routes
registerRoutes(app);

// SPA fallback for Vercel
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/') || req.path.startsWith('/healthz') || req.path.startsWith('/readyz')) {
    return res.status(404).json({ message: 'Not found' });
  }
  res.sendFile(path.join(__dirname, '../dist/public/index.html'));
});

// Global error handler
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  console.error(`${new Date().toISOString()} - Error ${status}: ${req.method} ${req.path} - ${message}`);
  res.status(status).json({ message });
});

// Export for Vercel
export default app;