module.exports = {
  name: 'tool166',
  description: 'أمر tool166 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool166 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool166 شغال.');
  },
};
