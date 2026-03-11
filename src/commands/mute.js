module.exports = {
  name: 'mute',
  description: 'أمر mute',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: mute');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: mute');
  },
};
