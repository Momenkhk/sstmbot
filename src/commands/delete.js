module.exports = {
  name: 'delete',
  description: 'أمر delete',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: delete');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: delete');
  },
};
