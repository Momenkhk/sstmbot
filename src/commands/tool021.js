module.exports = {
  name: 'tool021',
  description: 'أمر tool021 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool021 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool021 شغال.');
  },
};
