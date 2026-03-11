module.exports = {
  name: 'tool149',
  description: 'أمر tool149 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool149 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool149 شغال.');
  },
};
