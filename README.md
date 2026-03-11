# SSTM Bot v4

تم إصلاح البوت بحيث الأوامر لم تعد ترجع رسالة عامة فقط.

## ماذا تم إصلاحه

- ✅ حذف أوامر `tool*` نهائيًا.
- ✅ كل الأوامر الموجودة من الصور موجودة كملفات أوامر داخل `src/commands`.
- ✅ أوامر الإدارة الأساسية أصبحت تنفذ فعلًا:
  - `ban`, `kick`, `timeout`, `mute`, `unmute`
  - `lock`, `unlock`, `hide`, `unhide`, `slowmode`, `clear`
  - `role`, `nickname`, `warn`, `warnings`, `remove-warn`
  - `avatar`, `user`, `server`, `ping`, `roles`
  - `autoreply-add`, `autoreply-list`, `autoreply-remove`
- ✅ أوامر الإعدادات/الحماية (مثل setup/set/anti...) تحفظ إعداداتها داخل `guildData.json` بدل رسالة وهمية.
- ✅ الأمر `خط` (alias لأمر `khat`) يمسح رسالة العضو ويرسل الخط المحفوظ من `line`.

## ملفات مهمة

- `src/lib/managedCommand.js`: منطق تنفيذ الأوامر الفعلي.
- `src/lib/guildStore.js`: تخزين إعدادات السيرفر والـ warns والـ autoreplies.
- `src/handlers/messageHandler.js`: تنفيذ الأوامر + دعم الرد التلقائي.

## التشغيل

```bash
npm install
npm run check
npm run register
npm start
```
