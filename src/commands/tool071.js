module.exports = {
  name: 'tool071',
  description: 'أمر tool071 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool071 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool071 شغال.');
  },
};
