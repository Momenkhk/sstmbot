module.exports = {
  name: 'setticket',
  description: 'أمر setticket',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setticket');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setticket');
  },
};
