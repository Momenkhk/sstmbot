module.exports = {
  name: 'gstart',
  description: 'أمر gstart',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: gstart');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: gstart');
  },
};
