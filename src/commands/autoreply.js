module.exports = {
  name: 'autoreply',
  description: 'أمر autoreply',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: autoreply');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: autoreply');
  },
};
