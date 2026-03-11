module.exports = {
  name: 'tool216',
  description: 'أمر tool216 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool216 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool216 شغال.');
  },
};
