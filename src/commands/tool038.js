module.exports = {
  name: 'tool038',
  description: 'أمر tool038 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool038 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool038 شغال.');
  },
};
