module.exports = {
  name: 'prison',
  description: 'أمر prison',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: prison');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: prison');
  },
};
