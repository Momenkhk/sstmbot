module.exports = {
  name: 'suggestion-mode',
  description: 'أمر suggestion-mode',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: suggestion-mode');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: suggestion-mode');
  },
};
