module.exports = {
  name: 'setvoice',
  description: 'أمر setvoice',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setvoice');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setvoice');
  },
};
