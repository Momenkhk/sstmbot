module.exports = {
  name: 'tool008',
  description: 'أمر tool008 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool008 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool008 شغال.');
  },
};
