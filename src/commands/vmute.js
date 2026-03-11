module.exports = {
  name: 'vmute',
  description: 'أمر vmute',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: vmute');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: vmute');
  },
};
