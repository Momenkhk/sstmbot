module.exports = {
  name: 'tool180',
  description: 'أمر tool180 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool180 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool180 شغال.');
  },
};
