module.exports = {
  name: 'clear',
  description: 'أمر clear',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: clear');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: clear');
  },
};
