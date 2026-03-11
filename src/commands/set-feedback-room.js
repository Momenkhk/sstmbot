module.exports = {
  name: 'set-feedback-room',
  description: 'أمر set-feedback-room',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: set-feedback-room');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: set-feedback-room');
  },
};
