module.exports = {
  name: 'tool238',
  description: 'أمر tool238 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool238 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool238 شغال.');
  },
};
