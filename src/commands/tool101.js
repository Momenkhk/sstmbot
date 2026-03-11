module.exports = {
  name: 'tool101',
  description: 'أمر tool101 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool101 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool101 شغال.');
  },
};
