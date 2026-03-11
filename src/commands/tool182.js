module.exports = {
  name: 'tool182',
  description: 'أمر tool182 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool182 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool182 شغال.');
  },
};
