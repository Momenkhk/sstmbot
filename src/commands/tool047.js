module.exports = {
  name: 'tool047',
  description: 'أمر tool047 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool047 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool047 شغال.');
  },
};
