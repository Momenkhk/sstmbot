module.exports = {
  name: 'daorole',
  description: 'أمر daorole',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: daorole');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: daorole');
  },
};
