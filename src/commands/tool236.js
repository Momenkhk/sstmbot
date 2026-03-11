module.exports = {
  name: 'tool236',
  description: 'أمر tool236 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool236 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool236 شغال.');
  },
};
