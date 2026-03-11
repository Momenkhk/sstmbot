module.exports = {
  name: 'set-message',
  description: 'أمر set-message',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: set-message');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: set-message');
  },
};
