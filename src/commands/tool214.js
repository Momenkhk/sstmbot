module.exports = {
  name: 'tool214',
  description: 'أمر tool214 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool214 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool214 شغال.');
  },
};
