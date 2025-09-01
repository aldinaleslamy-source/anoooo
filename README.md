# Luxury Shop — Frontend (Next.js)

هذا المجلد يحتوي على مشروع الواجهة الأمامية مبنيًا بـ Next.js، جاهز للفتح في VS Code.

## تشغيل محلي (بدون Docker)
1. تأكد أن لديك Node.js و npm مثبتين.
2. انسخ `.env.example` إلى `.env.local` واضبط `API_URL` لو أردت استخدام backend محلي.
3. تثبيت الحزم:
   ```
   npm install
   ```
4. تشغيل وضع التطوير:
   ```
   npm run dev
   ```
5. افتح: http://localhost:3000

## تشغيل باستخدام Docker (مُوصى بعد إعداد root repo docker-compose)
في حال وجود `docker-compose.yml` في المشروع الجذري، يمكنك تشغيل الحاويات عبر:
```
docker-compose up --build frontend
```

## بنية المجلدات الأساسية
- `pages/` — صفحات Next.js
- `components/` — مكونات الواجهة القابلة لإعادة الاستخدام
- `lib/` — client API helper
- `styles/` — ملفات CSS العالمية
- `public/` — صور وأصول ثابتة

## ملاحظات
- يعتمد الكود على وجود API خلفي في `process.env.API_URL` (افتراضي http://localhost:8000).
- الملفات التي أعددتها هي scaffold قابل للتطوير مباشرة — يمكنك توزيع كل ملف على فريقك كما طلبت.
