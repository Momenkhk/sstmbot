module.exports = {
  name: 'setrjoin',
  description: 'أمر setrjoin',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setrjoin');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setrjoin');
  },
};
