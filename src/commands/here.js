module.exports = {
  name: 'here',
  description: 'أمر here',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: here');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: here');
  },
};
