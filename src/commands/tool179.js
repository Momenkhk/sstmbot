module.exports = {
  name: 'tool179',
  description: 'أمر tool179 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool179 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool179 شغال.');
  },
};
