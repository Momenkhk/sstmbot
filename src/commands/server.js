module.exports = {
  name: 'server',
  description: 'أمر server',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: server');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: server');
  },
};
