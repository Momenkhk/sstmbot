module.exports = {
  name: 'detlog',
  description: 'أمر detlog',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: detlog');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: detlog');
  },
};
