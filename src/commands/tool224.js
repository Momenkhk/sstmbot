module.exports = {
  name: 'tool224',
  description: 'أمر tool224 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool224 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool224 شغال.');
  },
};
