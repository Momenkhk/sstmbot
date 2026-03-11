module.exports = {
  name: 'tool129',
  description: 'أمر tool129 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool129 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool129 شغال.');
  },
};
