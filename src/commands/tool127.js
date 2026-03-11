module.exports = {
  name: 'tool127',
  description: 'أمر tool127 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool127 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool127 شغال.');
  },
};
