module.exports = {
  name: 'tool220',
  description: 'أمر tool220 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool220 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool220 شغال.');
  },
};
