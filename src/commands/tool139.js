module.exports = {
  name: 'tool139',
  description: 'أمر tool139 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool139 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool139 شغال.');
  },
};
