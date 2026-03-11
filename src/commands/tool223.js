module.exports = {
  name: 'tool223',
  description: 'أمر tool223 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool223 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool223 شغال.');
  },
};
