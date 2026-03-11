module.exports = {
  name: 'role',
  description: 'أمر role',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: role');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: role');
  },
};
