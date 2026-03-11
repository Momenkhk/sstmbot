module.exports = {
  name: 'tool174',
  description: 'أمر tool174 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool174 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool174 شغال.');
  },
};
