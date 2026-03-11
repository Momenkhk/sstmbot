module.exports = {
  name: 'tool044',
  description: 'أمر tool044 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool044 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool044 شغال.');
  },
};
