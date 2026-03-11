module.exports = {
  name: 'tool242',
  description: 'أمر tool242 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool242 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool242 شغال.');
  },
};
