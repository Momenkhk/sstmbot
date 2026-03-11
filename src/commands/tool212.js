module.exports = {
  name: 'tool212',
  description: 'أمر tool212 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool212 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool212 شغال.');
  },
};
