module.exports = {
  name: 'close',
  description: 'أمر close',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: close');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: close');
  },
};
