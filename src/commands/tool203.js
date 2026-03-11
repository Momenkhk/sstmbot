module.exports = {
  name: 'tool203',
  description: 'أمر tool203 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool203 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool203 شغال.');
  },
};
