module.exports = {
  name: 'unvmute',
  description: 'أمر unvmute',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: unvmute');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: unvmute');
  },
};
