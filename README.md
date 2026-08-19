# 🌙 كوننا الصغير — Our Little Universe

موقع ويب رومانسي بسيط مبني بـ Python/Flask، يحكي قصة حب عبر خمسة فصول:
البداية، رسالة من القلب، لحظات لا تُنسى، حكايتنا عبر الزمن، والمفاجأة الأخيرة.

---

## 1) كيف تخصّصه لقصتكما (مهم جدًا)

كل النصوص القابلة للتعديل موجودة في ملف واحد فقط:

```
config.py
```

افتحه وعدّل:
- `HER_NAME` و `MY_NAME`
- `HERO_TITLE` و `HERO_SUBTITLE` (نص الشاشة الرئيسية)
- `ANNIVERSARY_DATE` (اتركه `""` لإخفائه)
- `LOVE_LETTER_BODY` (قائمة فقرات — أضف/احذف كما تشاء)
- `THINGS_I_LOVE` (قائمة جمل قصيرة)
- `TIMELINE` (قائمة محطات: تاريخ + عنوان + وصف)
- `GALLERY` (قائمة صور — انظر الخطوة التالية)
- `FINAL_TITLE` / `FINAL_MESSAGE` / `FINAL_SIGNATURE`

لا حاجة لتعديل أي ملف HTML أو CSS أو Python آخر.

---

## 2) إضافة صوركما

1. ضع صور الذكريات داخل مجلد: `static/images/`
2. في `config.py`، أضف كل صورة إلى قائمة `GALLERY` هكذا:

```python
GALLERY = [
    {"file": "photo1.jpg", "caption": "يوم الشاطئ الجميل"},
    {"file": "photo2.jpg", "caption": "أول رحلة معًا"},
]
```

إن تركت `GALLERY` فارغة، سيظهر تصميم بديل أنيق مكان الصور بانتظار إضافتها.

---

## 3) إضافة موسيقى خلفية (اختياري)

1. ضع ملف MP3 داخل: `static/audio/`
2. أعد تسميته إلى: `song.mp3`
3. تأكد أن `ENABLE_MUSIC = True` في `config.py`

سيظهر تلقائيًا زر تشغيل/إيقاف الموسيقى أسفل يسار الشاشة. إن لم تضف ملفًا، لن يظهر الزر إطلاقًا (لا حاجة لتعديل أي كود).

⚠️ انتبه لحقوق الأغنية إن كنت ستشارك الرابط علنًا.

---

## 4) التجربة محليًا قبل الرفع (اختياري)

```bash
pip install -r requirements.txt
python app.py
```

ثم افتح: http://localhost:5000

---

## 5) النشر على Render

### الطريقة الأسهل — عبر Blueprint (render.yaml)
1. ارفع هذا المجلد كمستودع على GitHub.
2. من لوحة تحكم Render: **New +** → **Blueprint**
3. اختر المستودع، وسيقرأ Render ملف `render.yaml` تلقائيًا ويهيئ كل شيء.
4. اضغط **Apply** وانتظر انتهاء البناء.

### الطريقة اليدوية
1. ارفع المجلد إلى مستودع GitHub.
2. من Render: **New +** → **Web Service**
3. اختر المستودع.
4. اضبط:
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`
5. اضغط **Create Web Service**.

بعد انتهاء النشر، ستحصل على رابط مثل:
`https://our-little-universe.onrender.com`

انسخه وأرسله لها 💌

---

## 6) هيكل المشروع

```
our-little-universe/
├── app.py                 # تطبيق Flask
├── config.py               # كل النصوص القابلة للتخصيص (عدّل هنا فقط)
├── requirements.txt
├── Procfile
├── render.yaml
├── templates/
│   └── index.html
└── static/
    ├── css/style.css
    ├── js/main.js
    ├── images/              # ضع صوركما هنا
    └── audio/                # ضع أغنيتكما هنا (song.mp3)
```

---

صُنع بحب 🌙✨
