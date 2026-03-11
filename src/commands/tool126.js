module.exports = {
  name: 'tool126',
  description: 'أمر tool126 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool126 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool126 شغال.');
  },
};
