module.exports = {
  name: 'tool142',
  description: 'أمر tool142 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool142 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool142 شغال.');
  },
};
