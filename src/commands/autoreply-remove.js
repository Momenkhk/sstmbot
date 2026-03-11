module.exports = {
  name: 'autoreply-remove',
  description: 'أمر autoreply-remove',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: autoreply-remove');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: autoreply-remove');
  },
};
