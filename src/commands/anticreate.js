module.exports = {
  name: 'anticreate',
  description: 'أمر anticreate',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: anticreate');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: anticreate');
  },
};
