module.exports = {
  name: 'tool022',
  description: 'أمر tool022 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool022 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool022 شغال.');
  },
};
