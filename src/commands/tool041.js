module.exports = {
  name: 'tool041',
  description: 'أمر tool041 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool041 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool041 شغال.');
  },
};
