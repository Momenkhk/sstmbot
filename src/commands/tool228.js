module.exports = {
  name: 'tool228',
  description: 'أمر tool228 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool228 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool228 شغال.');
  },
};
