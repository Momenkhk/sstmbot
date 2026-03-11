module.exports = {
  name: 'embed',
  description: 'أمر embed',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: embed');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: embed');
  },
};
