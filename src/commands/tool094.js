module.exports = {
  name: 'tool094',
  description: 'أمر tool094 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool094 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool094 شغال.');
  },
};
