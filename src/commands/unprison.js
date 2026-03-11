module.exports = {
  name: 'unprison',
  description: 'أمر unprison',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: unprison');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: unprison');
  },
};
