module.exports = {
  name: 'wanti',
  description: 'أمر wanti',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: wanti');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: wanti');
  },
};
