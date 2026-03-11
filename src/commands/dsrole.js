module.exports = {
  name: 'dsrole',
  description: 'أمر dsrole',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: dsrole');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: dsrole');
  },
};
