module.exports = {
  name: 'tool111',
  description: 'أمر tool111 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool111 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool111 شغال.');
  },
};
