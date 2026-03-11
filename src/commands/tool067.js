module.exports = {
  name: 'tool067',
  description: 'أمر tool067 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool067 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool067 شغال.');
  },
};
