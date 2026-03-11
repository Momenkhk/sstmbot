module.exports = {
  name: 'tool007',
  description: 'أمر tool007 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool007 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool007 شغال.');
  },
};
