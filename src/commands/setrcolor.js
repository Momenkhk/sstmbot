module.exports = {
  name: 'setrcolor',
  description: 'أمر setrcolor',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setrcolor');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setrcolor');
  },
};
