module.exports = {
  name: 'tool143',
  description: 'أمر tool143 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool143 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool143 شغال.');
  },
};
