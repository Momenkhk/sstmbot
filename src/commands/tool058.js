module.exports = {
  name: 'tool058',
  description: 'أمر tool058 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool058 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool058 شغال.');
  },
};
