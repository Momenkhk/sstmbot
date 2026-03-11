module.exports = {
  name: 'tool199',
  description: 'أمر tool199 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool199 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool199 شغال.');
  },
};
