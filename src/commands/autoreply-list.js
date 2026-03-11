module.exports = {
  name: 'autoreply-list',
  description: 'أمر autoreply-list',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: autoreply-list');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: autoreply-list');
  },
};
