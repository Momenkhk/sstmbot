module.exports = {
  name: 'line-mode',
  description: 'أمر line-mode',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: line-mode');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: line-mode');
  },
};
