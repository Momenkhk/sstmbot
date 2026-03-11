module.exports = {
  name: 'tool080',
  description: 'أمر tool080 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool080 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool080 شغال.');
  },
};
