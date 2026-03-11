module.exports = {
  name: 'tool104',
  description: 'أمر tool104 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool104 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool104 شغال.');
  },
};
