module.exports = {
  name: 'tool146',
  description: 'أمر tool146 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool146 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool146 شغال.');
  },
};
