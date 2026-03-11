module.exports = {
  name: 'tool209',
  description: 'أمر tool209 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool209 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool209 شغال.');
  },
};
