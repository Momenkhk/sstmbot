module.exports = {
  name: 'tool100',
  description: 'أمر tool100 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool100 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool100 شغال.');
  },
};
