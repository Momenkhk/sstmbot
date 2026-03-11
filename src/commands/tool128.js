module.exports = {
  name: 'tool128',
  description: 'أمر tool128 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool128 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool128 شغال.');
  },
};
