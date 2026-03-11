module.exports = {
  name: 'word',
  description: 'أمر word',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: word');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: word');
  },
};
