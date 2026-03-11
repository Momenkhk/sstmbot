module.exports = {
  name: 'tool106',
  description: 'أمر tool106 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool106 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool106 شغال.');
  },
};
