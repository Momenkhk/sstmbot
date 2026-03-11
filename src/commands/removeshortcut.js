module.exports = {
  name: 'removeshortcut',
  description: 'أمر removeshortcut',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: removeshortcut');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: removeshortcut');
  },
};
