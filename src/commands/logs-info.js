module.exports = {
  name: 'logs-info',
  description: 'أمر logs-info',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: logs-info');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: logs-info');
  },
};
