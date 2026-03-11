module.exports = {
  name: 'ctcolors',
  description: 'أمر ctcolors',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: ctcolors');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: ctcolors');
  },
};
