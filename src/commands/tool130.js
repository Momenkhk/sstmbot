module.exports = {
  name: 'tool130',
  description: 'أمر tool130 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool130 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool130 شغال.');
  },
};
