module.exports = {
  name: 'tool213',
  description: 'أمر tool213 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool213 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool213 شغال.');
  },
};
