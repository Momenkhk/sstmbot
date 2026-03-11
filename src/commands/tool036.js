module.exports = {
  name: 'tool036',
  description: 'أمر tool036 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool036 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool036 شغال.');
  },
};
