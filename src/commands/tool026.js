module.exports = {
  name: 'tool026',
  description: 'أمر tool026 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool026 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool026 شغال.');
  },
};
