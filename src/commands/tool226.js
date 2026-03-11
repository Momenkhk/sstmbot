module.exports = {
  name: 'tool226',
  description: 'أمر tool226 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool226 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool226 شغال.');
  },
};
