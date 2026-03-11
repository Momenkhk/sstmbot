module.exports = {
  name: 'ban',
  description: 'أمر ban',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: ban');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: ban');
  },
};
