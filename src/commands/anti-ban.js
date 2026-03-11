module.exports = {
  name: 'anti-ban',
  description: 'أمر anti-ban',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: anti-ban');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: anti-ban');
  },
};
