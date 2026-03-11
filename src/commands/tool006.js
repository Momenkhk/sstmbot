module.exports = {
  name: 'tool006',
  description: 'أمر tool006 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool006 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool006 شغال.');
  },
};
