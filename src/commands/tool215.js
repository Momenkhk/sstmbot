module.exports = {
  name: 'tool215',
  description: 'أمر tool215 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool215 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool215 شغال.');
  },
};
