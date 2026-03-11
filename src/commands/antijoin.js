module.exports = {
  name: 'antijoin',
  description: 'أمر antijoin',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: antijoin');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: antijoin');
  },
};
