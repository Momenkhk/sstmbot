module.exports = {
  name: 'tcrole',
  description: 'أمر tcrole',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: tcrole');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: tcrole');
  },
};
