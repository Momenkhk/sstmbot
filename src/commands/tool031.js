module.exports = {
  name: 'tool031',
  description: 'أمر tool031 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool031 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool031 شغال.');
  },
};
