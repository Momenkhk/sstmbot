module.exports = {
  name: 'enable',
  description: 'أمر enable',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: enable');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: enable');
  },
};
