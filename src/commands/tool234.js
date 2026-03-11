module.exports = {
  name: 'tool234',
  description: 'أمر tool234 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool234 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool234 شغال.');
  },
};
