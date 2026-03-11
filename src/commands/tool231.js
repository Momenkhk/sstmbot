module.exports = {
  name: 'tool231',
  description: 'أمر tool231 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool231 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool231 شغال.');
  },
};
