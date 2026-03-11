module.exports = {
  name: 'tool099',
  description: 'أمر tool099 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool099 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool099 شغال.');
  },
};
