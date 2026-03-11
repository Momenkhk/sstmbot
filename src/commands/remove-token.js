module.exports = {
  name: 'remove-token',
  description: 'أمر remove-token',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: remove-token');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: remove-token');
  },
};
