module.exports = {
  name: 'tool205',
  description: 'أمر tool205 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool205 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool205 شغال.');
  },
};
