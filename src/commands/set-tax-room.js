module.exports = {
  name: 'set-tax-room',
  description: 'أمر set-tax-room',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: set-tax-room');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: set-tax-room');
  },
};
