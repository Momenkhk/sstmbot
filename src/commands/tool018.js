module.exports = {
  name: 'tool018',
  description: 'أمر tool018 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool018 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool018 شغال.');
  },
};
