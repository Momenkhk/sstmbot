module.exports = {
  name: 'tool177',
  description: 'أمر tool177 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool177 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool177 شغال.');
  },
};
