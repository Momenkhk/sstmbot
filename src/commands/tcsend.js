module.exports = {
  name: 'tcsend',
  description: 'أمر tcsend',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: tcsend');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: tcsend');
  },
};
