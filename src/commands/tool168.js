module.exports = {
  name: 'tool168',
  description: 'أمر tool168 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool168 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool168 شغال.');
  },
};
