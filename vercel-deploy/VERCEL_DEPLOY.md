# 🚀 Развертывание AK Detailing Service на Vercel

## Готовность к развертыванию

✅ **Все файлы конфигурации созданы:**
- `vercel.json` - основная конфигурация Vercel
- `api/index.ts` - serverless-функция для API и статических файлов
- `.vercelignore` - исключения для развертывания
- `build.js` - скрипт сборки проекта

## Шаги для развертывания

### 1. Подготовка к развертыванию
```bash
npm run build
```

### 2. Переменные окружения для Vercel
Обязательно добавьте в Vercel Dashboard следующие переменные:

**Обязательные:**
- `DATABASE_URL` - ваша PostgreSQL база данных (Neon/Supabase)
- `TELEGRAM_BOT_TOKEN` - токен бота: `8044509387:AAE6Z3CkrOn0Qykr8a_SuTvQzT23QJCCBsg`
- `TELEGRAM_CHAT_ID` - ваш Chat ID: `197840565`

**Опциональные:**
- `ADMIN_API_KEY` - для доступа к админ-панели
- `SENDGRID_API_KEY` - для email уведомлений

### 3. Развертывание через Vercel CLI
```bash
# Установите Vercel CLI
npm i -g vercel

# Войдите в аккаунт
vercel login

# Разверните проект
vercel --prod
```

### 4. Развертывание через Git
1. Загрузите код в GitHub репозиторий
2. Подключите репозиторий к Vercel Dashboard
3. Добавьте переменные окружения
4. Нажмите Deploy

## Архитектура для Vercel

- **Frontend**: React SPA собирается в `dist/public`
- **Backend**: Express API становится serverless-функцией в `/api`
- **Database**: PostgreSQL через Neon Database (serverless)
- **Notifications**: Telegram Bot API для уведомлений

## Проверка после развертывания

После развертывания проверьте:
1. Главная страница загружается
2. Все страницы услуг работают
3. Форма контактов отправляет заявки
4. Telegram уведомления приходят
5. Health checks: `/healthz` и `/readyz`

## Troubleshooting

**Если не работают API routes:**
- Проверьте переменные окружения в Vercel Dashboard
- Убедитесь что DATABASE_URL корректный

**Если не приходят Telegram уведомления:**
- Проверьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID
- Убедитесь что бот добавлен в чат

**Если не загружаются страницы:**
- Проверьте что файлы собрались в dist/public
- Убедитесь что SPA routing работает

## Готово к развертыванию! 🎉

Проект полностью настроен для Vercel.com с профессиональной архитектурой.