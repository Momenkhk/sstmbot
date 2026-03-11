module.exports = {
  name: 'tool095',
  description: 'أمر tool095 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool095 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool095 شغال.');
  },
};
