module.exports = {
  name: 'copy-emoji',
  description: 'أمر copy-emoji',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: copy-emoji');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: copy-emoji');
  },
};
