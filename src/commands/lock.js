module.exports = {
  name: 'lock',
  description: 'أمر lock',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: lock');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: lock');
  },
};
