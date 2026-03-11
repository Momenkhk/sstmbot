module.exports = {
  name: 'tool227',
  description: 'أمر tool227 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool227 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool227 شغال.');
  },
};
