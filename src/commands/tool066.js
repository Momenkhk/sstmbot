module.exports = {
  name: 'tool066',
  description: 'أمر tool066 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool066 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool066 شغال.');
  },
};
