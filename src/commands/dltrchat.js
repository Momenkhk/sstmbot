module.exports = {
  name: 'dltrchat',
  description: 'أمر dltrchat',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: dltrchat');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: dltrchat');
  },
};
