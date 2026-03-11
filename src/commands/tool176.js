module.exports = {
  name: 'tool176',
  description: 'أمر tool176 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool176 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool176 شغال.');
  },
};
