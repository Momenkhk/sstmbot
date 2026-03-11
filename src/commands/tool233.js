module.exports = {
  name: 'tool233',
  description: 'أمر tool233 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool233 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool233 شغال.');
  },
};
