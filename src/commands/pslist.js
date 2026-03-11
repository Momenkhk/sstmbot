module.exports = {
  name: 'pslist',
  description: 'أمر pslist',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: pslist');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: pslist');
  },
};
