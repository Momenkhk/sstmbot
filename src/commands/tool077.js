module.exports = {
  name: 'tool077',
  description: 'أمر tool077 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool077 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool077 شغال.');
  },
};
