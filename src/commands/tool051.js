module.exports = {
  name: 'tool051',
  description: 'أمر tool051 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool051 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool051 شغال.');
  },
};
