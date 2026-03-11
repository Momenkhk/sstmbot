module.exports = {
  name: 'tool156',
  description: 'أمر tool156 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool156 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool156 شغال.');
  },
};
