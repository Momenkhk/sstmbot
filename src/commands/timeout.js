module.exports = {
  name: 'timeout',
  description: 'أمر timeout',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: timeout');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: timeout');
  },
};
