module.exports = {
  name: 'tool073',
  description: 'أمر tool073 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool073 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool073 شغال.');
  },
};
