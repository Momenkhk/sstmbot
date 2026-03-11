module.exports = {
  name: 'tool015',
  description: 'أمر tool015 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool015 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool015 شغال.');
  },
};
