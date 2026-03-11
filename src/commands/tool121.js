module.exports = {
  name: 'tool121',
  description: 'أمر tool121 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool121 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool121 شغال.');
  },
};
