module.exports = {
  name: 'checkvc',
  description: 'أمر checkvc',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: checkvc');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: checkvc');
  },
};
