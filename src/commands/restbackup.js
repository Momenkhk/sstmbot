module.exports = {
  name: 'restbackup',
  description: 'أمر restbackup',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: restbackup');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: restbackup');
  },
};
