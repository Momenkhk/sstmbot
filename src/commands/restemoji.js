module.exports = {
  name: 'restemoji',
  description: 'أمر restemoji',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: restemoji');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: restemoji');
  },
};
