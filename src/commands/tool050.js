module.exports = {
  name: 'tool050',
  description: 'أمر tool050 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool050 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool050 شغال.');
  },
};
