module.exports = {
  name: 'avt',
  description: 'أمر avt',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: avt');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: avt');
  },
};
