module.exports = {
  name: 'tool133',
  description: 'أمر tool133 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool133 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool133 شغال.');
  },
};
