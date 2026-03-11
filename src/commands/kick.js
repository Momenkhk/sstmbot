module.exports = {
  name: 'kick',
  description: 'أمر kick',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: kick');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: kick');
  },
};
