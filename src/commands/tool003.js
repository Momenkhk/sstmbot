module.exports = {
  name: 'tool003',
  description: 'أمر tool003 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool003 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool003 شغال.');
  },
};
