module.exports = {
  name: 'mymute',
  description: 'أمر mymute',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: mymute');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: mymute');
  },
};
