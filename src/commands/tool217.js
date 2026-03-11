module.exports = {
  name: 'tool217',
  description: 'أمر tool217 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool217 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool217 شغال.');
  },
};
