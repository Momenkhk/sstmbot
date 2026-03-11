module.exports = {
  name: 'tool023',
  description: 'أمر tool023 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool023 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool023 شغال.');
  },
};
