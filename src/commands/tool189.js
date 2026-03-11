module.exports = {
  name: 'tool189',
  description: 'أمر tool189 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool189 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool189 شغال.');
  },
};
