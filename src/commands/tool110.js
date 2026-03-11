module.exports = {
  name: 'tool110',
  description: 'أمر tool110 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool110 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool110 شغال.');
  },
};
