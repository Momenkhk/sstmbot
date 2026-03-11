module.exports = {
  name: 'unline',
  description: 'أمر unline',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: unline');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: unline');
  },
};
