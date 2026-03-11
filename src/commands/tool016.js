module.exports = {
  name: 'tool016',
  description: 'أمر tool016 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool016 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool016 شغال.');
  },
};
