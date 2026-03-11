module.exports = {
  name: 'tipanel',
  description: 'أمر tipanel',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: tipanel');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: tipanel');
  },
};
