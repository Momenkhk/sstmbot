module.exports = {
  name: 'tool218',
  description: 'أمر tool218 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool218 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool218 شغال.');
  },
};
