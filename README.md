# AK Detailing Service - Vercel Deployment Package

## 📋 Инструкция для деплоя на Vercel

### Содержимое папки:
```
POPO/
├── client/          # Frontend код (React + Vite)
├── server/          # Backend код (Express)
├── shared/          # Общие типы TypeScript
├── api/             # Serverless функции для Vercel
├── migrations/      # Database migrations
├── package.json     # Зависимости
├── vercel.json      # Конфигурация Vercel
└── другие конфигурационные файлы
```

## 🚀 Шаги деплоя:

### 1. Загрузить на GitHub/GitLab
```bash
cd POPO
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/ak-detailing.git
git push -u origin main
```

### 2. Импортировать в Vercel
1. Зайти на [vercel.com](https://vercel.com)
2. Нажать **New Project**
3. Импортировать репозиторий из GitHub
4. Настройки проекта:
   - **Framework Preset**: Vite
   - **Root Directory**: `.` (корень)
   - **Build Command**: `vite build`
   - **Output Directory**: `dist/public`

### 3. Настроить Environment Variables
В Vercel Dashboard → Settings → Environment Variables добавить:

**Обязательные:**
```
DATABASE_URL = your_neon_database_url
TELEGRAM_BOT_TOKEN = your_telegram_bot_token
TELEGRAM_CHAT_ID = your_telegram_chat_id
```

**Опциональные:**
```
NODE_ENV = production
ADMIN_API_KEY = your_admin_key (для доступа к /api/contacts)
```

### 4. Deploy
Нажать **Deploy** и дождаться завершения сборки.

## ✅ Проверка после деплоя:

1. **Главная страница**: Должна загружаться с навигацией
2. **Навигация**: Переходы между страницами работают
3. **Форма контакта**: Отправка сообщения в Telegram
4. **SEO**: Проверить meta-теги в исходном коде страницы
5. **Размер bundle**: Должен быть ~434kb (проверить в DevTools)

## 🔧 Troubleshooting

### Если сайт не загружается:
- Проверить Build Logs в Vercel Dashboard
- Убедиться что все Environment Variables добавлены
- Проверить что DATABASE_URL корректный

### Если не работает Telegram:
- Проверить TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID
- Проверить логи в Vercel Functions
- Протестировать через `/api/test-telegram`

### Если 404 на страницах:
- Проверить что vercel.json содержит правильные rewrites
- Очистить кэш деплоя и передеплоить

## 📊 Технический стек:

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript  
- **Database**: PostgreSQL (Neon)
- **Styling**: Tailwind CSS + Shadcn/ui
- **Deployment**: Vercel Serverless Functions
- **Notifications**: Telegram Bot API

## 🌐 Структура API:

- `POST /api/contact` - Отправка формы контакта
- `GET /api/contacts` - Список контактов (требует admin key)
- `GET /api/test-telegram` - Тест Telegram уведомлений
- `GET /healthz` - Health check
- `GET /readyz` - Database readiness check

## 📝 После успешного деплоя:

1. Настроить custom domain в Vercel (если есть)
2. Проверить все страницы и формы
3. Настроить Google Analytics (уже подключен)
4. Протестировать на мобильных устройствах
5. Отправить тестовую заявку через форму

## 🔐 Безопасность:

- Rate limiting на форму контакта (5 запросов/15 мин)
- Honeypot защита от ботов
- CORS настроен для Vercel домена
- Admin endpoints защищены API ключом

---

**Версия**: 1.0.0  
**Дата**: Октябрь 2025  
**Поддержка**: akdetailingservislv@gmail.com
