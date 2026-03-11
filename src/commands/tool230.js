module.exports = {
  name: 'tool230',
  description: 'أمر tool230 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool230 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool230 شغال.');
  },
};
