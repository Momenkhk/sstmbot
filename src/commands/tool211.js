module.exports = {
  name: 'tool211',
  description: 'أمر tool211 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool211 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool211 شغال.');
  },
};
