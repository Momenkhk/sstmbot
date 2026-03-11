module.exports = {
  name: 'tool116',
  description: 'أمر tool116 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool116 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool116 شغال.');
  },
};
