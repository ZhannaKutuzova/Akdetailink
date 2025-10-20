# ✅ Чек-лист перед деплоем на Vercel

## 📁 Проверка файлов

- [x] `client/` - Frontend код присутствует
- [x] `server/` - Backend код присутствует
- [x] `shared/` - Общие типы присутствуют
- [x] `api/` - Serverless функции присутствуют
- [x] `migrations/` - Database migrations присутствуют
- [x] `package.json` - Зависимости присутствуют
- [x] `vercel.json` - Конфигурация Vercel присутствует
- [x] `.gitignore` - Файл игнорирования присутствует
- [x] `.env.example` - Шаблон переменных окружения присутствует
- [x] `README.md` - Документация присутствует
- [x] `DEPLOY.md` - Инструкция по деплою присутствует

## 🔧 Конфигурация

### vercel.json
- [x] buildCommand: `vite build`
- [x] outputDirectory: `dist/public`
- [x] Rewrites настроены для SPA
- [x] API routes настроены

### package.json
- [x] Все зависимости установлены
- [x] Build scripts присутствуют
- [x] Scripts: dev, build, start

## 🌍 Environment Variables (нужно добавить в Vercel)

Перед деплоем подготовьте следующие переменные:

### Обязательные:
- [ ] `DATABASE_URL` - URL базы данных Neon
- [ ] `TELEGRAM_BOT_TOKEN` - Токен Telegram бота
- [ ] `TELEGRAM_CHAT_ID` - ID чата для уведомлений

### Опциональные:
- [ ] `ADMIN_API_KEY` - Ключ для доступа к админ-панели
- [ ] `NODE_ENV` - Установить в `production`

## 🗄️ База данных

- [ ] Neon Database создана
- [ ] DATABASE_URL получен
- [ ] Таблицы созданы (migrations применены)
- [ ] Database доступна извне

## 📱 Telegram

- [ ] Бот создан через @BotFather
- [ ] TELEGRAM_BOT_TOKEN получен
- [ ] CHAT_ID получен (написать боту и проверить через /api/telegram-info)
- [ ] Бот протестирован локально

## 📦 Git Repository

- [ ] GitHub/GitLab репозиторий создан
- [ ] Код загружен в репозиторий
- [ ] Основная ветка: `main` или `master`
- [ ] .gitignore работает (node_modules не загружен)

## 🚀 Готовность к деплою

- [ ] Все файлы проверены
- [ ] Environment Variables подготовлены
- [ ] База данных настроена
- [ ] Telegram бот настроен
- [ ] Git репозиторий готов

---

## 📋 Команды для деплоя

### Вариант 1: Vercel CLI
```bash
npm i -g vercel
cd POPO
vercel
```

### Вариант 2: Vercel Dashboard
1. https://vercel.com/new
2. Import Git Repository
3. Добавить Environment Variables
4. Deploy

---

## ✅ После деплоя проверить:

- [ ] Главная страница загружается
- [ ] Навигация работает
- [ ] Все 10 страниц доступны
- [ ] SEO meta-теги присутствуют
- [ ] Форма контакта работает
- [ ] Telegram уведомления приходят
- [ ] Google Analytics работает
- [ ] Мобильная версия работает
- [ ] SSL сертификат активен
- [ ] Custom domain подключен (если нужен)

---

## 📊 Ожидаемые метрики после деплоя:

- **Build Time**: 2-3 минуты
- **Bundle Size**: ~434 KB
- **Page Load**: < 2 секунды
- **Lighthouse Score**: 90+

---

**Все готово? Приступайте к деплою! 🚀**

Подробная инструкция в файле `DEPLOY.md`
