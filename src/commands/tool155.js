module.exports = {
  name: 'tool155',
  description: 'أمر tool155 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool155 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool155 شغال.');
  },
};
