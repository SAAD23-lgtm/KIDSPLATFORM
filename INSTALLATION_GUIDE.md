# 🚀 دليل التثبيت والتشغيل - تطبيق أنا خريطة

## 📦 محتويات الملف

لقد حصلت على:
- ✅ `ana-khareeta-source.tar.gz` - ملفات المشروع الكاملة

## 🛠️ المتطلبات الأساسية

قبل البدء، تأكد من تثبيت:

1. **Node.js** (النسخة 18 أو أحدث)
   - تحميل من: https://nodejs.org
   - تحقق من التثبيت: `node --version`

2. **npm** (يأتي مع Node.js)
   - تحقق من التثبيت: `npm --version`

## 📥 خطوات التثبيت

### الخطوة 1: فك الضغط
```bash
# فك ضغط الملف
tar -xzf ana-khareeta-source.tar.gz
cd ana-khareeta
```

### الخطوة 2: تثبيت المكتبات
```bash
# تثبيت جميع المكتبات المطلوبة
npm install
```
⏱️ قد يستغرق 2-5 دقائق

### الخطوة 3: تشغيل التطبيق
```bash
# تشغيل في وضع التطوير
npm run dev
```

### الخطوة 4: فتح المتصفح
- افتح المتصفح واذهب إلى: `http://localhost:3000`
- 🎉 التطبيق يعمل الآن!

## 🌐 للاستخدام على الموبايل

### في نفس الشبكة:
1. شغّل التطبيق: `npm run dev`
2. ابحث عن عنوان IP: سيظهر في Terminal
3. على الموبايل: افتح `http://[IP-ADDRESS]:3000`

مثال: `http://192.168.1.100:3000`

## 📱 بناء للنشر

```bash
# بناء ملفات الإنتاج
npm run build

# معاينة النسخة النهائية
npm run preview
```

الملفات الجاهزة في مجلد `dist/`

## 🔧 حل المشاكل الشائعة

### المشكلة: `npm: command not found`
**الحل**: لم يتم تثبيت Node.js. حمّله من nodejs.org

### المشكلة: خطأ أثناء `npm install`
**الحل**: 
```bash
# امسح وأعد المحاولة
rm -rf node_modules package-lock.json
npm install
```

### المشكلة: المنفذ 3000 مشغول
**الحل**: سيسأل عن منفذ آخر تلقائياً

### المشكلة: صفحة بيضاء
**الحل**: 
- تحقق من Console في المتصفح (F12)
- تأكد من تشغيل `npm run dev`

## 📁 هيكل المشروع

```
ana-khareeta/
├── public/              # ملفات عامة
├── src/
│   ├── assets/         # صور وأصوات
│   ├── components/     # مكونات React
│   ├── data/          # بيانات المنهج
│   ├── pages/         # صفحات التطبيق
│   ├── store/         # إدارة الحالة
│   ├── styles/        # التنسيقات
│   └── App.jsx        # التطبيق الرئيسي
├── package.json       # معلومات المشروع
└── README.md         # معلومات عامة
```

## 🎨 التخصيص

### تغيير الألوان:
عدّل `tailwind.config.js`:
```javascript
colors: {
  primary: '#FF6B6B',    // لون أساسي
  secondary: '#4ECDC4',  // لون ثانوي
  // ... المزيد
}
```

### إضافة مواقع جديدة:
عدّل `src/data/curriculumData.js`

### تغيير النصوص:
عدّل `src/data/curriculumData.js`

## 📚 الموارد الإضافية

- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **Vite**: https://vitejs.dev

## 💡 نصائح الأداء

1. ✅ استخدم Chrome أو Firefox
2. ✅ أغلق البرامج الثقيلة أثناء التطوير
3. ✅ لا تفتح ملفات كبيرة في المحرر

## 🆘 الحصول على المساعدة

إذا واجهت مشكلة:
1. اقرأ رسالة الخطأ بعناية
2. ابحث في Google
3. تحقق من الـ Console (F12)

## 🎯 الخطوات التالية

بعد التثبيت:
1. ✅ جرّب التطبيق كاملاً
2. ✅ اقرأ `TEACHER_GUIDE.md`
3. ✅ راجع بيانات المنهج
4. ✅ خصّص حسب احتياجك

---

## ⚡ بدء سريع (مختصر)

```bash
# فك الضغط
tar -xzf ana-khareeta-source.tar.gz
cd ana-khareeta

# التثبيت
npm install

# التشغيل
npm run dev

# افتح http://localhost:3000
```

---

**التطبيق جاهز للاستخدام! 🎉**

نتمنى تجربة تعليمية ممتعة!
