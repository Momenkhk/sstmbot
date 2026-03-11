module.exports = {
  name: 'setpic',
  description: 'أمر setpic',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setpic');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setpic');
  },
};
