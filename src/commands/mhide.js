module.exports = {
  name: 'mhide',
  description: 'أمر mhide',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: mhide');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: mhide');
  },
};
