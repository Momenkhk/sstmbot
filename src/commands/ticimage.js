module.exports = {
  name: 'ticimage',
  description: 'أمر ticimage',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: ticimage');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: ticimage');
  },
};
