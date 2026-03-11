module.exports = {
  name: 'tool062',
  description: 'أمر tool062 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool062 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool062 شغال.');
  },
};
