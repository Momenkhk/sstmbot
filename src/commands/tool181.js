module.exports = {
  name: 'tool181',
  description: 'أمر tool181 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool181 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool181 شغال.');
  },
};
