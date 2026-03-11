module.exports = {
  name: 'nick',
  description: 'أمر nick',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: nick');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: nick');
  },
};
