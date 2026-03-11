module.exports = {
  name: 'unreact',
  description: 'أمر unreact',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: unreact');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: unreact');
  },
};
