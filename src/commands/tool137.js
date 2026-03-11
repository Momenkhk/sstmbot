module.exports = {
  name: 'tool137',
  description: 'أمر tool137 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool137 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool137 شغال.');
  },
};
