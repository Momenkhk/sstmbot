module.exports = {
  name: 'tool197',
  description: 'أمر tool197 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool197 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool197 شغال.');
  },
};
