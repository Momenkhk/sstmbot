module.exports = {
  name: 'autoline',
  description: 'أمر autoline',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: autoline');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: autoline');
  },
};
