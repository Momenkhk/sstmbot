module.exports = {
  name: 'tool134',
  description: 'أمر tool134 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool134 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool134 شغال.');
  },
};
