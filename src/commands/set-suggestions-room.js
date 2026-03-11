module.exports = {
  name: 'set-suggestions-room',
  description: 'أمر set-suggestions-room',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: set-suggestions-room');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: set-suggestions-room');
  },
};
