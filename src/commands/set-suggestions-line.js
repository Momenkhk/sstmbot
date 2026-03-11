module.exports = {
  name: 'set-suggestions-line',
  description: 'أمر set-suggestions-line',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: set-suggestions-line');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: set-suggestions-line');
  },
};
