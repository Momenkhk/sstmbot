module.exports = {
  name: 'removeowner',
  description: 'أمر removeowner',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: removeowner');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: removeowner');
  },
};
