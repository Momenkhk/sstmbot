module.exports = {
  name: 'anti-delete-rooms',
  description: 'أمر anti-delete-rooms',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: anti-delete-rooms');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: anti-delete-rooms');
  },
};
