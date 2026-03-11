module.exports = {
  name: 'autoreply-add',
  description: 'أمر autoreply-add',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: autoreply-add');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: autoreply-add');
  },
};
