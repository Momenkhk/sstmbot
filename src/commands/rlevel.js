module.exports = {
  name: 'rlevel',
  description: 'أمر rlevel',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: rlevel');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: rlevel');
  },
};
