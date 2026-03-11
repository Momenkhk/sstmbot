module.exports = {
  name: 'warn',
  description: 'أمر warn',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: warn');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: warn');
  },
};
