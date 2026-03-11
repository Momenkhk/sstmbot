module.exports = {
  name: 'tool084',
  description: 'أمر tool084 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool084 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool084 شغال.');
  },
};
