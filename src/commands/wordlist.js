module.exports = {
  name: 'wordlist',
  description: 'أمر wordlist',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: wordlist');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: wordlist');
  },
};
