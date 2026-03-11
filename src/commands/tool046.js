module.exports = {
  name: 'tool046',
  description: 'أمر tool046 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool046 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool046 شغال.');
  },
};
