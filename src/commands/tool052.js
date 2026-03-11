module.exports = {
  name: 'tool052',
  description: 'أمر tool052 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool052 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool052 شغال.');
  },
};
