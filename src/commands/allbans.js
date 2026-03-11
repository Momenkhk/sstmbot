module.exports = {
  name: 'allbans',
  description: 'أمر allbans',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: allbans');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: allbans');
  },
};
