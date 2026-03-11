module.exports = {
  name: 'tool171',
  description: 'أمر tool171 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool171 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool171 شغال.');
  },
};
