module.exports = {
  name: 'feedback-mode',
  description: 'أمر feedback-mode',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: feedback-mode');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: feedback-mode');
  },
};
