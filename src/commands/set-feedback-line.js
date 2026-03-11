module.exports = {
  name: 'set-feedback-line',
  description: 'أمر set-feedback-line',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: set-feedback-line');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: set-feedback-line');
  },
};
