module.exports = {
  name: 'tool102',
  description: 'أمر tool102 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool102 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool102 شغال.');
  },
};
