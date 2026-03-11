module.exports = {
  name: 'tool151',
  description: 'أمر tool151 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool151 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool151 شغال.');
  },
};
