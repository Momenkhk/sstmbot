module.exports = {
  name: 'setlog',
  description: 'أمر setlog',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setlog');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setlog');
  },
};
