module.exports = {
  name: 'tool190',
  description: 'أمر tool190 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool190 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool190 شغال.');
  },
};
