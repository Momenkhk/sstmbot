module.exports = {
  name: 'tool154',
  description: 'أمر tool154 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool154 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool154 شغال.');
  },
};
