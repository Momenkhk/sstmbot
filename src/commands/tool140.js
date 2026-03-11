module.exports = {
  name: 'tool140',
  description: 'أمر tool140 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool140 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool140 شغال.');
  },
};
