module.exports = {
  name: 'tool090',
  description: 'أمر tool090 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool090 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool090 شغال.');
  },
};
