module.exports = {
  name: 'tool098',
  description: 'أمر tool098 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool098 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool098 شغال.');
  },
};
