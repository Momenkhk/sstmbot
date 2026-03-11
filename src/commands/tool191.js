module.exports = {
  name: 'tool191',
  description: 'أمر tool191 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool191 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool191 شغال.');
  },
};
