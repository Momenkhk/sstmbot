module.exports = {
  name: 'remove-user',
  description: 'أمر remove-user',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: remove-user');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: remove-user');
  },
};
