module.exports = {
  name: 'tool092',
  description: 'أمر tool092 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool092 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool092 شغال.');
  },
};
