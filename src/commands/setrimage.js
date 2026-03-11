module.exports = {
  name: 'setrimage',
  description: 'أمر setrimage',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setrimage');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setrimage');
  },
};
