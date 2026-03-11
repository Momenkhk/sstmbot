module.exports = {
  name: 'pic',
  description: 'أمر pic',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: pic');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: pic');
  },
};
