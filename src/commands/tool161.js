module.exports = {
  name: 'tool161',
  description: 'أمر tool161 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool161 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool161 شغال.');
  },
};
