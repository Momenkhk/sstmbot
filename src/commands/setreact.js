module.exports = {
  name: 'setreact',
  description: 'أمر setreact',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setreact');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setreact');
  },
};
