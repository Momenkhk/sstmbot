module.exports = {
  name: 'tool138',
  description: 'أمر tool138 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool138 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool138 شغال.');
  },
};
