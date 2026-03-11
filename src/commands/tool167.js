module.exports = {
  name: 'tool167',
  description: 'أمر tool167 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool167 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool167 شغال.');
  },
};
