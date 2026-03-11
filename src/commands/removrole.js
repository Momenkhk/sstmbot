module.exports = {
  name: 'removrole',
  description: 'أمر removrole',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: removrole');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: removrole');
  },
};
