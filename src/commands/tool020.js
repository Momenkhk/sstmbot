module.exports = {
  name: 'tool020',
  description: 'أمر tool020 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool020 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool020 شغال.');
  },
};
