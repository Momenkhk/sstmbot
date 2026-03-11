module.exports = {
  name: 'unpic',
  description: 'أمر unpic',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: unpic');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: unpic');
  },
};
