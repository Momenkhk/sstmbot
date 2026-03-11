module.exports = {
  name: 'greroll',
  description: 'أمر greroll',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: greroll');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: greroll');
  },
};
