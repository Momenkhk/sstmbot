module.exports = {
  name: 'tool131',
  description: 'أمر tool131 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool131 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool131 شغال.');
  },
};
