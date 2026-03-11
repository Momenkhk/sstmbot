module.exports = {
  name: 'tool082',
  description: 'أمر tool082 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool082 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool082 شغال.');
  },
};
