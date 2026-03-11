module.exports = {
  name: 'mshow',
  description: 'أمر mshow',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: mshow');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: mshow');
  },
};
