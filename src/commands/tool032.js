module.exports = {
  name: 'tool032',
  description: 'أمر tool032 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool032 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool032 شغال.');
  },
};
