module.exports = {
  name: 'tool033',
  description: 'أمر tool033 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool033 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool033 شغال.');
  },
};
