module.exports = {
  name: 'tool178',
  description: 'أمر tool178 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool178 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool178 شغال.');
  },
};
