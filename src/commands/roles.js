module.exports = {
  name: 'roles',
  description: 'أمر roles',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: roles');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: roles');
  },
};
