module.exports = {
  name: 'hide',
  description: 'أمر hide',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: hide');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: hide');
  },
};
