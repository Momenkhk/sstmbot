module.exports = {
  name: 'tool122',
  description: 'أمر tool122 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool122 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool122 شغال.');
  },
};
