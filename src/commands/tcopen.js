module.exports = {
  name: 'tcopen',
  description: 'أمر tcopen',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: tcopen');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: tcopen');
  },
};
