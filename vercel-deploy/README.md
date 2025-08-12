# 🚗 AK Detailing Service - Vercel Deployment

**Professional mobile auto detailing website for Las Vegas Valley**

## 🚀 Quick Deploy to Vercel

### 1. Upload this folder to GitHub
- Create new repository on GitHub
- Upload all files from this `vercel-deploy` folder
- Commit and push

### 2. Connect to Vercel
- Go to [vercel.com](https://vercel.com)
- Import GitHub repository
- Vercel will auto-detect the configuration

### 3. Set Environment Variables
Add these in Vercel Dashboard → Settings → Environment Variables:

**Required:**
```
DATABASE_URL=your_postgresql_connection_string
TELEGRAM_BOT_TOKEN=8044509387:AAE6Z3CkrOn0Qykr8a_SuTvQzT23QJCCBsg
TELEGRAM_CHAT_ID=197840565
```

**Optional:**
```
ADMIN_API_KEY=your_admin_key
SENDGRID_API_KEY=your_sendgrid_key
```

### 4. Deploy
Click "Deploy" in Vercel - it will automatically:
- Install dependencies
- Build React frontend
- Configure serverless API
- Deploy to global CDN

## ✅ What's Included

**Frontend (React + TypeScript):**
- 12+ service pages (paint correction, ceramic coating, etc.)
- Professional responsive design
- Contact forms with validation
- Loading animations and exit-intent popup

**Backend (Express.js → Serverless):**
- Contact form processing
- Telegram notifications
- PostgreSQL database integration
- Rate limiting and security

**Production Features:**
- Health check endpoints (`/healthz`, `/readyz`)
- Error handling and logging
- Optimized builds (455KB JS, 68KB CSS)
- SEO optimization

## 📱 Business Info

- **Company:** AK Detailing Service LLC
- **Phone:** +1 (702) 518-6014
- **Email:** akdetailingservislv@gmail.com
- **Service Areas:** Las Vegas Valley, Summerlin, Henderson
- **Hours:** Mon-Fri 8AM-7PM, Sat-Sun 9AM-5PM

## 🛠 Technology Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS
- **Backend:** Express.js (serverless), Node.js
- **Database:** PostgreSQL with Drizzle ORM
- **Deployment:** Vercel.com serverless platform
- **Notifications:** Telegram Bot API

## 📞 Support

After deployment, test:
1. Homepage loads correctly
2. Service pages navigation works
3. Contact form submits successfully  
4. Telegram notifications arrive
5. All pages are mobile-responsive

**Ready for professional use! 🎉**