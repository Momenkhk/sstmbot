module.exports = {
  name: 'tool037',
  description: 'أمر tool037 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool037 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool037 شغال.');
  },
};
