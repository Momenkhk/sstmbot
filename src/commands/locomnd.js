module.exports = {
  name: 'locomnd',
  description: 'أمر locomnd',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: locomnd');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: locomnd');
  },
};
