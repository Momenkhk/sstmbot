module.exports = {
  name: 'tool188',
  description: 'أمر tool188 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool188 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool188 شغال.');
  },
};
