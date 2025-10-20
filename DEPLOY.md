# 🚀 Быстрый гайд по деплою на Vercel

## ✅ Предварительная проверка

Убедитесь что папка POPO содержит:
- ✅ `client/` - Frontend код
- ✅ `server/` - Backend код  
- ✅ `shared/` - Общие типы
- ✅ `api/` - Serverless функции
- ✅ `package.json` - Зависимости
- ✅ `vercel.json` - Конфигурация Vercel
- ✅ `.env.example` - Шаблон переменных окружения

---

## 📦 Шаг 1: Загрузить на GitHub

```bash
cd POPO
git init
git add .
git commit -m "Initial commit for Vercel deployment"
git branch -M main
git remote add origin https://github.com/ВАШ_USERNAME/ak-detailing.git
git push -u origin main
```

---

## 🌐 Шаг 2: Деплой на Vercel

### Вариант A: Через Vercel CLI (быстро)
```bash
npm i -g vercel
cd POPO
vercel
```

### Вариант B: Через Vercel Dashboard
1. Зайти на https://vercel.com/new
2. Import Git Repository
3. Выбрать ваш репозиторий
4. Настройки оставить по умолчанию:
   - Framework: Vite
   - Root Directory: `./`
   - Build Command: `vite build`
   - Output Directory: `dist/public`

---

## 🔐 Шаг 3: Environment Variables

В Vercel Dashboard → Settings → Environment Variables добавить:

### Обязательные переменные:

```
DATABASE_URL
Значение: postgresql://user:pass@host.neon.tech/dbname?sslmode=require
```

```
TELEGRAM_BOT_TOKEN
Значение: 7812345678:AAHXXXxxxXXXxxxxxXXXxxxxXXXxxx
```

```
TELEGRAM_CHAT_ID  
Значение: 197840565
```

### Опциональные:

```
ADMIN_API_KEY
Значение: ваш_секретный_ключ_для_админки
```

```
NODE_ENV
Значение: production
```

---

## ✅ Шаг 4: Deploy

Нажать кнопку **Deploy** и дождаться завершения сборки (2-3 минуты).

---

## 🧪 Шаг 5: Тестирование

После успешного деплоя проверить:

1. **Главная страница**: `https://your-project.vercel.app/`
2. **Навигация**: Переходы между страницами
3. **Форма контакта**: Отправить тестовое сообщение
4. **Telegram**: Проверить что пришло уведомление
5. **API**: Открыть `https://your-project.vercel.app/healthz`

---

## 🎯 Важные URL после деплоя:

- Сайт: `https://your-project.vercel.app`
- Health Check: `https://your-project.vercel.app/healthz`
- Database Check: `https://your-project.vercel.app/readyz`
- Test Telegram: `https://your-project.vercel.app/api/test-telegram`

---

## 🐛 Troubleshooting

### Проблема: Белый экран
**Решение**: Проверить Build Logs в Vercel, возможно TypeScript ошибки

### Проблема: 404 на страницах
**Решение**: Проверить `vercel.json` - должны быть rewrites

### Проблема: Не работает форма
**Решение**: Проверить Environment Variables, особенно TELEGRAM токены

### Проблема: Database error
**Решение**: Проверить DATABASE_URL и доступность Neon Database

---

## 📊 Production Checklist

После деплоя:
- [ ] Custom Domain подключен (если нужен)
- [ ] SSL сертификат активен (автоматически от Vercel)
- [ ] Telegram уведомления работают
- [ ] Все страницы загружаются
- [ ] SEO meta-теги на месте
- [ ] Google Analytics работает
- [ ] Мобильная версия протестирована
- [ ] Форма отправляет заявки

---

## 🔄 Обновление сайта

Чтобы обновить сайт после изменений:

```bash
git add .
git commit -m "Описание изменений"
git push
```

Vercel автоматически пересоберет и задеплоит новую версию!

---

**Готово! Ваш сайт на Vercel! 🎉**
