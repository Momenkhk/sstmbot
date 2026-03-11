module.exports = {
  name: 'tool141',
  description: 'أمر tool141 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool141 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool141 شغال.');
  },
};
