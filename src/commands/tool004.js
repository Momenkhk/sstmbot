module.exports = {
  name: 'tool004',
  description: 'أمر tool004 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool004 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool004 شغال.');
  },
};
