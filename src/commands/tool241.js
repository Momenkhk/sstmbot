module.exports = {
  name: 'tool241',
  description: 'أمر tool241 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool241 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool241 شغال.');
  },
};
