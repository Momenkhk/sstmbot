module.exports = {
  name: 'tool163',
  description: 'أمر tool163 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool163 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool163 شغال.');
  },
};
