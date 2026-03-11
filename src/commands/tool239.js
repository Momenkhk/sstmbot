module.exports = {
  name: 'tool239',
  description: 'أمر tool239 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool239 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool239 شغال.');
  },
};
