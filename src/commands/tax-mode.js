module.exports = {
  name: 'tax-mode',
  description: 'أمر tax-mode',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: tax-mode');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: tax-mode');
  },
};
