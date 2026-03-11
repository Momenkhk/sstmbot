module.exports = {
  name: 'tool069',
  description: 'أمر tool069 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool069 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool069 شغال.');
  },
};
