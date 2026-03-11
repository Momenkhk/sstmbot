module.exports = {
  name: 'tool237',
  description: 'أمر tool237 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool237 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool237 شغال.');
  },
};
