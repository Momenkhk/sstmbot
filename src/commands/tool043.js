module.exports = {
  name: 'tool043',
  description: 'أمر tool043 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool043 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool043 شغال.');
  },
};
