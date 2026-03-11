module.exports = {
  name: 'tool017',
  description: 'أمر tool017 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool017 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool017 شغال.');
  },
};
