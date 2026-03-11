module.exports = {
  name: 'tool024',
  description: 'أمر tool024 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool024 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool024 شغال.');
  },
};
