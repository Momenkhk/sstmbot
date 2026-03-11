module.exports = {
  name: 'tool113',
  description: 'أمر tool113 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool113 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool113 شغال.');
  },
};
