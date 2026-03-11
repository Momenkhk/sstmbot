module.exports = {
  name: 'tool048',
  description: 'أمر tool048 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool048 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool048 شغال.');
  },
};
