module.exports = {
  name: 'tax',
  description: 'أمر tax',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: tax');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: tax');
  },
};
