module.exports = {
  name: 'tool206',
  description: 'أمر tool206 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool206 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool206 شغال.');
  },
};
