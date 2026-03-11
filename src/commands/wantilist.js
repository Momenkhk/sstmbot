module.exports = {
  name: 'wantilist',
  description: 'أمر wantilist',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: wantilist');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: wantilist');
  },
};
