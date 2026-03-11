module.exports = {
  name: 'tool219',
  description: 'أمر tool219 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool219 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool219 شغال.');
  },
};
