module.exports = {
  name: 'tool120',
  description: 'أمر tool120 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool120 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool120 شغال.');
  },
};
