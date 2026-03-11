module.exports = {
  name: 'unblock',
  description: 'أمر unblock',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: unblock');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: unblock');
  },
};
