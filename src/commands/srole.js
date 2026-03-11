module.exports = {
  name: 'srole',
  description: 'أمر srole',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: srole');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: srole');
  },
};
