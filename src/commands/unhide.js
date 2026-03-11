module.exports = {
  name: 'unhide',
  description: 'أمر unhide',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: unhide');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: unhide');
  },
};
