module.exports = {
  name: 'tool065',
  description: 'أمر tool065 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool065 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool065 شغال.');
  },
};
