module.exports = {
  name: 'tool093',
  description: 'أمر tool093 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool093 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool093 شغال.');
  },
};
