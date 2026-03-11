module.exports = {
  name: 'tool081',
  description: 'أمر tool081 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool081 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool081 شغال.');
  },
};
