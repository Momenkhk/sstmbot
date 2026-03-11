module.exports = {
  name: 'tool145',
  description: 'أمر tool145 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool145 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool145 شغال.');
  },
};
