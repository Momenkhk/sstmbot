module.exports = {
  name: 'add-user',
  description: 'أمر add-user',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: add-user');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: add-user');
  },
};
