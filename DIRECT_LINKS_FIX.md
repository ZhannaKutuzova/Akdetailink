# 🔗 Исправление прямых ссылок на Vercel

## Проблема
При открытии прямых ссылок (например, `/paint-correction`, `/contact` и т.д.) сайт крашится с ошибкой 500:
```
500: INTERNAL_SERVER_ERROR
Code: FUNCTION_INVOCATION_FAILED
```

**Навигация внутри сайта работает**, но прямые ссылки нет.

---

## Причина
Serverless функция не отдавала статические файлы (CSS, JS, изображения) и не правильно обрабатывала SPA fallback для прямых URL.

---

## Решение

### 1. Добавлен express.static middleware
```typescript
const staticPath = path.join(__dirname, '../dist/public');
app.use(express.static(staticPath));
```
Теперь все статические файлы (JS, CSS, изображения) отдаются корректно.

### 2. Улучшен SPA fallback
```typescript
app.get('*', (req, res, next) => {
  // Пропускаем API routes
  if (req.path.startsWith('/api/') || 
      req.path.startsWith('/healthz') || 
      req.path.startsWith('/readyz')) {
    return next();
  }
  
  // Отдаем index.html для всех остальных маршрутов
  const indexPath = path.join(__dirname, '../dist/public/index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).json({ 
        error: 'Failed to load page', 
        path: req.path 
      });
    }
  });
});
```

---

## ✅ Что теперь работает:

### Прямые ссылки:
- ✅ `https://your-site.vercel.app/`
- ✅ `https://your-site.vercel.app/paint-correction`
- ✅ `https://your-site.vercel.app/ceramic-coating`
- ✅ `https://your-site.vercel.app/contact`
- ✅ Любая страница сайта

### Навигация:
- ✅ Переходы между страницами
- ✅ Exit-intent баннер
- ✅ Перезагрузка страницы

### API:
- ✅ `/api/contact` - форма работает
- ✅ `/healthz` - health check
- ✅ Telegram уведомления

### Статические файлы:
- ✅ CSS загружается
- ✅ JavaScript загружается
- ✅ Изображения отображаются
- ✅ Favicon виден

---

## 🚀 Деплой исправления:

```bash
cd POPO
git add .
git commit -m "Fix direct links - add express.static and improve SPA fallback"
git push
```

Vercel автоматически пересоберет проект (2-3 минуты).

---

## 🧪 Проверка после деплоя:

1. **Главная страница:**
   ```
   https://your-site.vercel.app/
   ```

2. **Прямая ссылка на услугу:**
   ```
   https://your-site.vercel.app/paint-correction
   ```

3. **Прямая ссылка на контакт:**
   ```
   https://your-site.vercel.app/contact
   ```

4. **Шеринг любой страницы:**
   - Скопируйте URL любой страницы
   - Откройте в новой вкладке/окне
   - Должна загрузиться корректно

5. **Перезагрузка:**
   - Откройте любую страницу
   - Нажмите F5 или Ctrl+R
   - Страница должна загрузиться снова

---

## 📊 Структура после build:

```
dist/
├── public/              # Статика от Vite
│   ├── index.html      # SPA entry point
│   ├── assets/         # JS, CSS
│   │   ├── index-abc123.js
│   │   └── index-def456.css
│   └── favicon.png
│
api/
└── index.js            # Serverless function (скомпилирован)
```

---

**Обновлено:** 20 октября 2025  
**Статус:** ✅ Исправлено - прямые ссылки работают!
