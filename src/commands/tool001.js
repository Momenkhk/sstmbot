module.exports = {
  name: 'tool001',
  description: 'أمر tool001 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool001 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool001 شغال.');
  },
};
