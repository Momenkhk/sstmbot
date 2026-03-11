module.exports = {
  name: 'tool076',
  description: 'أمر tool076 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool076 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool076 شغال.');
  },
};
