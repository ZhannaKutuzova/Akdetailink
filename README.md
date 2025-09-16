# AK Detailing Service - Vercel Deploy

## 📋 Инструкция для деплоя на Vercel

### Подготовка файлов
Папка PedroMY содержит:
- `client/` - Frontend код (React + TypeScript)
- `server/` - Backend код  
- `shared/` - Общие типы
- `api/` - Serverless функции для Vercel
- `package.json` - Зависимости
- `vercel.json` - Конфиг Vercel

### Обязательные файлы для Vercel
✅ `vercel.json` - правильная конфигурация
✅ `api/contact.js` - serverless функция (JavaScript)
✅ `api/telegram.js` - дополнительная serverless функция

### Шаги деплоя
1. **Загрузить папку PedroMY на GitHub/GitLab**
2. **В Vercel Dashboard:**
   - New Project
   - Import из репозитория
   - Root Directory: `/` (корень папки PedroMY)
   - Framework: Vite
3. **Environment Variables в Vercel:**
   ```
   TELEGRAM_BOT_TOKEN = 8044509387:AAE6Z3CkrOn0Qykr8a_SuTvQzT23QJCCBsg
   TELEGRAM_CHAT_ID = 197840565
   NODE_ENV = production
   ```
4. **Deploy**

### Проверка что сработало
- ✅ Главная страница загружается
- ✅ Навигация работает между страницами  
- ✅ Форма контакта отправляет в Telegram
- ✅ Размер bundle: ~434kb (не 8kb!)
- ✅ Google Tag обнаруживается

### Если не работает
1. Проверить что `api/contact.js` в корне (не .ts)
2. Проверить Environment Variables  
3. Посмотреть Build Logs на наличие ошибок
4. Убедиться что копировали ВСЮ структуру проекта

### Ключевой момент
**Копировать ВСЮ структуру проекта, не отдельные файлы!**

### Структура файлов
```
PedroMY/
├── api/
│   ├── contact.js
│   └── telegram.js
├── client/
│   ├── src/
│   └── index.html (с Google Tag)
├── server/
├── shared/
├── package.json
├── vercel.json
└── другие конфиг файлы
```