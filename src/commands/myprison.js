module.exports = {
  name: 'myprison',
  description: 'أمر myprison',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: myprison');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: myprison');
  },
};
