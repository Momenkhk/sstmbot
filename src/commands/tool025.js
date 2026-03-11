module.exports = {
  name: 'tool025',
  description: 'أمر tool025 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool025 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool025 شغال.');
  },
};
