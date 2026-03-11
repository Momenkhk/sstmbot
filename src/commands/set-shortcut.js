module.exports = {
  name: 'set-shortcut',
  description: 'أمر set-shortcut',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: set-shortcut');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: set-shortcut');
  },
};
