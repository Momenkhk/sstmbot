module.exports = {
  name: 'tool200',
  description: 'أمر tool200 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool200 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool200 شغال.');
  },
};
