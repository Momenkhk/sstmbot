module.exports = {
  name: 'owners',
  description: 'أمر owners',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: owners');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: owners');
  },
};
