module.exports = {
  name: 'tool053',
  description: 'أمر tool053 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool053 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool053 شغال.');
  },
};
