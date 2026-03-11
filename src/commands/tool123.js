module.exports = {
  name: 'tool123',
  description: 'أمر tool123 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool123 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool123 شغال.');
  },
};
