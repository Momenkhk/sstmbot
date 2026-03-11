module.exports = {
  name: 'tool029',
  description: 'أمر tool029 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool029 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool029 شغال.');
  },
};
