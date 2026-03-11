module.exports = {
  name: 'tool162',
  description: 'أمر tool162 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool162 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool162 شغال.');
  },
};
