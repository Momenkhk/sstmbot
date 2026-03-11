module.exports = {
  name: 'setsecurity',
  description: 'أمر setsecurity',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setsecurity');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setsecurity');
  },
};
