module.exports = {
  name: 'tool014',
  description: 'أمر tool014 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool014 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool014 شغال.');
  },
};
