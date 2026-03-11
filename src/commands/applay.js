module.exports = {
  name: 'applay',
  description: 'أمر applay',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: applay');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: applay');
  },
};
