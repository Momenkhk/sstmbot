module.exports = {
  name: 'tool012',
  description: 'أمر tool012 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool012 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool012 شغال.');
  },
};
