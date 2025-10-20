# 🔧 Исправление ошибки 500 на Vercel

## Проблема
```
500: INTERNAL_SERVER_ERROR
Code: FUNCTION_INVOCATION_FAILED
```

**Причина:** Serverless функция пыталась импортировать `server/routes.ts` который создает HTTP сервер. В Vercel serverless functions не нужен HTTP сервер - только Express app.

## Решение

### 1. Переписан api/index.ts

**Было:** Импорт из `server/routes.ts` и создание HTTP сервера
```typescript
import { registerRoutes } from "../server/routes";
registerRoutes(app); // Возвращает Server
```

**Стало:** Независимый serverless endpoint
```typescript
// Все routes определены прямо в api/index.ts
// Telegram встроен напрямую
// Нет зависимостей от server/
```

### 2. Обновлен vercel.json

**Было:**
```json
{
  "buildCommand": "vite build",
  "outputDirectory": "dist/public",
  "rewrites": [...]
}
```

**Стало:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "functions": {
    "api/*.ts": {
      "maxDuration": 10
    }
  },
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/api/index"
    }
  ]
}
```

### Что изменилось:

1. ✅ **buildCommand** изменен с `vite build` на `npm run build`
   - Теперь собирается и frontend (vite build) и backend (esbuild)
   
2. ✅ **functions** добавлена конфигурация для serverless функций
   - Указан timeout: 10 секунд
   - Применяется ко всем файлам в api/
   
3. ✅ **rewrites** упрощен
   - Все запросы идут в api/index
   - Serverless функция сама решает что отдавать (API или статику)

---

## 🚀 Как задеплоить исправление

### Вариант 1: Через Git
```bash
git add vercel.json
git commit -m "Fix Vercel serverless function configuration"
git push
```

Vercel автоматически пересоберет проект.

### Вариант 2: Redeploy в Vercel Dashboard
1. Зайти в Vercel Dashboard
2. Открыть ваш проект
3. Нажать "Redeploy" на последнем деплое
4. Или загрузить обновленную папку POPO

---

## ✅ После деплоя проверить:

1. Главная страница загружается: `https://your-project.vercel.app/`
2. API работает: `https://your-project.vercel.app/healthz`
3. Страницы переключаются без ошибок
4. Форма контакта работает

---

## 🐛 Если все еще не работает:

### Проверить Build Logs в Vercel:
1. Vercel Dashboard → Deployments
2. Кликнуть на последний deploy
3. Открыть "Build Logs"
4. Искать ошибки в логах

### Проверить Function Logs:
1. Vercel Dashboard → Deployments
2. Кликнуть на deployment
3. Открыть "Functions"
4. Посмотреть логи ошибок

### Типичные проблемы:

**Problem: "Cannot find module"**
- Решение: Убедиться что все зависимости в package.json

**Problem: "MODULE_NOT_FOUND"**  
- Решение: Проверить импорты в api/index.ts

**Problem: Database connection failed**
- Решение: Проверить Environment Variable DATABASE_URL

**Problem: Timeout**
- Решение: Увеличить maxDuration в vercel.json

---

## 📊 Правильная структура после build:

```
dist/
├── public/          # Frontend статика (от vite build)
│   ├── index.html
│   ├── assets/
│   └── favicon.png
└── index.js         # Backend bundle (от esbuild)
```

---

**Обновлено:** 20 октября 2025  
**Статус:** ✅ Исправлено и готово к деплою
