module.exports = {
  name: 'tool184',
  description: 'أمر tool184 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool184 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool184 شغال.');
  },
};
