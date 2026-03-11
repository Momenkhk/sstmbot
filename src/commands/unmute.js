module.exports = {
  name: 'unmute',
  description: 'أمر unmute',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: unmute');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: unmute');
  },
};
