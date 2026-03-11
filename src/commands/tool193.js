module.exports = {
  name: 'tool193',
  description: 'أمر tool193 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool193 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool193 شغال.');
  },
};
