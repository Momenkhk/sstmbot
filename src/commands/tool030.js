module.exports = {
  name: 'tool030',
  description: 'أمر tool030 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool030 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool030 شغال.');
  },
};
