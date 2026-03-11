module.exports = {
  name: 'tool204',
  description: 'أمر tool204 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool204 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool204 شغال.');
  },
};
