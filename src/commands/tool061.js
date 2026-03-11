module.exports = {
  name: 'tool061',
  description: 'أمر tool061 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool061 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool061 شغال.');
  },
};
