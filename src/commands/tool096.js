module.exports = {
  name: 'tool096',
  description: 'أمر tool096 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool096 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool096 شغال.');
  },
};
