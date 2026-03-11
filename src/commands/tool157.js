module.exports = {
  name: 'tool157',
  description: 'أمر tool157 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool157 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool157 شغال.');
  },
};
