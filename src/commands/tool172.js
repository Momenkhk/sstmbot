module.exports = {
  name: 'tool172',
  description: 'أمر tool172 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool172 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool172 شغال.');
  },
};
