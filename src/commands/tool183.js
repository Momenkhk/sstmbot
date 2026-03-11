module.exports = {
  name: 'tool183',
  description: 'أمر tool183 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool183 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool183 شغال.');
  },
};
