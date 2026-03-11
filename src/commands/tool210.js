module.exports = {
  name: 'tool210',
  description: 'أمر tool210 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool210 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool210 شغال.');
  },
};
