# SSTM Bot v2

بوت متطور ومنظم جدًا مع **250 أمر**، وكل أمر في ملف مستقل داخل `src/commands`.

## أهم المطلوب اللي اتنفذ

- ✅ الاعتماد على `config.json` بدل `.env`
- ✅ كل أمر في ملف منفصل
- ✅ يدعم Slash Commands + Text Commands (بدون بريفكس)
- ✅ الحالة الافتراضية: `idle` + `watching`
- ✅ أمر `status <dnd|online|idle> <watching>`
- ✅ أمر `line <الخط>`
- ✅ أمر `addowner`
- ✅ أمر `say`
- ✅ أمر `come`
- ✅ أوامر التحكم في **البوت نفسه**: Owner فقط
- ✅ باقي أوامر الإدارة: Administrator أو Owner

## هيكلة المشروع

```txt
src/
  commands/        # 250 command files
  handlers/
  lib/
  utils/
  index.js
  registerCommands.js
config.json
```

## أوامر أساسية

- `help` / `/help`
- `bots` / `/bots`
- `status` / `/status` (Owner only)
- `line` / `/line` (Owner only)
- `addowner` / `/addowner` (Owner only)
- `say` / `/say` (Admin)
- `come` / `/come` (Admin)
- `khat` / `خط` يرسل الخط المحفوظ، وفي النص: يمسح رسالتك ثم يرسل الخط

> بالإضافة إلى مجموعة كبيرة من الأوامر المنظّمة (حتى 250 أمر) موزعة على تصنيفات مختلفة.

## التشغيل

```bash
npm install
npm run check
npm run register
npm start
```
