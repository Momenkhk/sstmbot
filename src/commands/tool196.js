module.exports = {
  name: 'tool196',
  description: 'أمر tool196 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool196 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool196 شغال.');
  },
};
