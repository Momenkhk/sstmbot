module.exports = {
  name: 'tool034',
  description: 'أمر tool034 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool034 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool034 شغال.');
  },
};
