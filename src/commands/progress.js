module.exports = {
  name: 'progress',
  description: 'أمر progress',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: progress');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: progress');
  },
};
