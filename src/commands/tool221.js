module.exports = {
  name: 'tool221',
  description: 'أمر tool221 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool221 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool221 شغال.');
  },
};
