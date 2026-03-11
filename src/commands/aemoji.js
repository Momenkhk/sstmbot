module.exports = {
  name: 'aemoji',
  description: 'أمر aemoji',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: aemoji');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: aemoji');
  },
};
