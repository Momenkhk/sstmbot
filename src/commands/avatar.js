module.exports = {
  name: 'avatar',
  description: 'أمر avatar',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: avatar');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: avatar');
  },
};
