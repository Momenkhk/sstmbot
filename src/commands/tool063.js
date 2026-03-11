module.exports = {
  name: 'tool063',
  description: 'أمر tool063 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool063 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool063 شغال.');
  },
};
