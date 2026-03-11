module.exports = {
  name: 'tool235',
  description: 'أمر tool235 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool235 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool235 شغال.');
  },
};
