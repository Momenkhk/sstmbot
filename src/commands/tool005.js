module.exports = {
  name: 'tool005',
  description: 'أمر tool005 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool005 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool005 شغال.');
  },
};
