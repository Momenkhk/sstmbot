module.exports = {
  name: 'myrole',
  description: 'أمر myrole',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: myrole');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: myrole');
  },
};
