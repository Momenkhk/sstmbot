module.exports = {
  name: 'setclear',
  description: 'أمر setclear',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setclear');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setclear');
  },
};
