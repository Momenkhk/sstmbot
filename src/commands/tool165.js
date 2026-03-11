module.exports = {
  name: 'tool165',
  description: 'أمر tool165 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool165 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool165 شغال.');
  },
};
