module.exports = {
  name: 'listlcomnd',
  description: 'أمر listlcomnd',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: listlcomnd');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: listlcomnd');
  },
};
