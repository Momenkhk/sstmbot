module.exports = {
  name: 'set-tax-line',
  description: 'أمر set-tax-line',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: set-tax-line');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: set-tax-line');
  },
};
