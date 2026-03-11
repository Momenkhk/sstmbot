module.exports = {
  name: 'check',
  description: 'أمر check',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: check');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: check');
  },
};
