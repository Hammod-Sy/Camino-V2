# خطوات رفع المشروع على Vercel

## الطريقة الأولى: رفع المشروع عبر GitHub (موصى بها)

### 1. إنشاء حساب على GitHub (إذا لم يكن لديك)
- اذهب إلى [github.com](https://github.com)
- سجل حساب جديد أو سجل الدخول

### 2. رفع المشروع على GitHub
1. افتح Terminal أو PowerShell في مجلد المشروع
2. قم بتنفيذ الأوامر التالية:

```bash
# تهيئة Git (إذا لم تكن مهيأ)
git init

# إضافة جميع الملفات
git add .

# عمل Commit
git commit -m "Initial commit"

# إنشاء مستودع جديد على GitHub (من الموقع) ثم:
git remote add origin https://github.com/YOUR_USERNAME/Camino-V2.git
git branch -M main
git push -u origin main
```

**ملاحظة:** استبدل `YOUR_USERNAME` باسم المستخدم الخاص بك على GitHub.

### 3. ربط المشروع بـ Vercel
1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل حساب جديد أو سجل الدخول (يمكنك استخدام GitHub)
3. اضغط على "Add New..." ثم "Project"
4. اختر المستودع "Camino-V2" من قائمة المشاريع
5. في إعدادات المشروع:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Vite (سيتم التعرف عليه تلقائياً)
   - **Build Command:** `npm run build` (سيتم ملؤه تلقائياً)
   - **Output Directory:** `dist` (سيتم ملؤه تلقائياً)
   - **Install Command:** `npm install` (سيتم ملؤه تلقائياً)

6. اضغط "Deploy"

### 4. إضافة متغيرات البيئة (إذا لزم الأمر)
إذا كان لديك متغيرات بيئة مثل `VITE_API_BASE_URL`:
1. بعد الرفع، اذهب إلى Project Settings
2. اضغط على "Environment Variables"
3. أضف المتغيرات المطلوبة

## الطريقة الثانية: رفع مباشر عبر Vercel CLI

### 1. تثبيت Vercel CLI
```bash
npm install -g vercel
```

### 2. الانتقال لمجلد frontend
```bash
cd frontend
```

### 3. رفع المشروع
```bash
vercel
```

اتبع التعليمات:
- **Set up and deploy?** → Y
- **Which scope?** → اختر حسابك
- **Link to existing project?** → N (أول مرة)
- **What's your project's name?** → camino-v2 (أو أي اسم)
- **In which directory is your code located?** → `./` (لأنك في مجلد frontend)
- **Want to override settings?** → Y
  - **Development Command:** `npm run dev`
  - **Install Command:** `npm install`
  - **Build Command:** `npm run build`
  - **Output Directory:** `dist`

### 4. رفع الإنتاج
```bash
vercel --prod
```

## ملاحظات مهمة

1. **MSW**: يتم تعطيل MSW تلقائياً في الإنتاج، لذا ستحتاج إلى API حقيقي أو إعداد API routes في Vercel.

2. **API Base URL**: تأكد من تعيين `VITE_API_BASE_URL` في Environment Variables إذا كنت تستخدم API خارجي.

3. **التحديثات المستقبلية**: عند رفع تغييرات جديدة:
   - **GitHub**: ادفع التغييرات إلى GitHub وسيتم الرفع تلقائياً
   - **CLI**: نفذ `vercel --prod` من مجلد frontend

## استكشاف الأخطاء

### خطأ في البناء (Build Error)
- تأكد من أن جميع المتغيرات البيئية معرّفة
- تحقق من أن `npm run build` يعمل محلياً

### 404 عند تحديث الصفحة
- تأكد من وجود ملف `vercel.json` مع rewrite rules
- تحقق من أن `rewrites` يشير إلى `/index.html`

### مشاكل في الصور
- تأكد من أن جميع الصور موجودة في مجلد `public/`

## الرابط
بعد الرفع، ستحصل على رابط مثل:
`https://camino-v2.vercel.app`

يمكنك أيضاً إضافة Domain مخصص من Project Settings > Domains.

