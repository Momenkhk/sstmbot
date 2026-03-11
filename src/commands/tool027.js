module.exports = {
  name: 'tool027',
  description: 'أمر tool027 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool027 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool027 شغال.');
  },
};
