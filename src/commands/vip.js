module.exports = {
  name: 'vip',
  description: 'أمر vip',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: vip');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: vip');
  },
};
