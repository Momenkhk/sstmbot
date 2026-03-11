module.exports = {
  name: 'ticlog',
  description: 'أمر ticlog',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: ticlog');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: ticlog');
  },
};
