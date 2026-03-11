module.exports = {
  name: 'tcrestart',
  description: 'أمر tcrestart',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: tcrestart');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: tcrestart');
  },
};
