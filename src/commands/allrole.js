module.exports = {
  name: 'allrole',
  description: 'أمر allrole',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: allrole');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: allrole');
  },
};
