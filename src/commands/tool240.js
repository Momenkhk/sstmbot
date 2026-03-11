module.exports = {
  name: 'tool240',
  description: 'أمر tool240 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool240 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool240 شغال.');
  },
};
