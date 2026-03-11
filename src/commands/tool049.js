module.exports = {
  name: 'tool049',
  description: 'أمر tool049 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool049 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool049 شغال.');
  },
};
