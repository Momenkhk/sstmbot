module.exports = {
  name: 'setprefix',
  description: 'أمر setprefix',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setprefix');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setprefix');
  },
};
