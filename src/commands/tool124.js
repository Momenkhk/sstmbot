module.exports = {
  name: 'tool124',
  description: 'أمر tool124 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool124 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool124 شغال.');
  },
};
