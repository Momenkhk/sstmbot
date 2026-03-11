module.exports = {
  name: 'tool192',
  description: 'أمر tool192 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool192 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool192 شغال.');
  },
};
