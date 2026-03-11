module.exports = {
  name: 'tool072',
  description: 'أمر tool072 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool072 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool072 شغال.');
  },
};
