module.exports = {
  name: 'tool175',
  description: 'أمر tool175 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool175 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool175 شغال.');
  },
};
