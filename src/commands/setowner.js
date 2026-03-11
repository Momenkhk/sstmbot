module.exports = {
  name: 'setowner',
  description: 'أمر setowner',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setowner');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setowner');
  },
};
