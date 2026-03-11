module.exports = {
  name: 'tool002',
  description: 'أمر tool002 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool002 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool002 شغال.');
  },
};
