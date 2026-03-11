module.exports = {
  name: 'tool185',
  description: 'أمر tool185 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool185 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool185 شغال.');
  },
};
