module.exports = {
  name: 'tool060',
  description: 'أمر tool060 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool060 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool060 شغال.');
  },
};
