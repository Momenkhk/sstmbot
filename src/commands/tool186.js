module.exports = {
  name: 'tool186',
  description: 'أمر tool186 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool186 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool186 شغال.');
  },
};
