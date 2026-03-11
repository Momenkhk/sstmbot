module.exports = {
  name: 'unban',
  description: 'أمر unban',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: unban');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: unban');
  },
};
