module.exports = {
  name: 'deny',
  description: 'أمر deny',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: deny');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: deny');
  },
};
