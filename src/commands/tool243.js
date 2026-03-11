module.exports = {
  name: 'tool243',
  description: 'أمر tool243 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool243 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool243 شغال.');
  },
};
