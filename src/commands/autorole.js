module.exports = {
  name: 'autorole',
  description: 'أمر autorole',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: autorole');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: autorole');
  },
};
