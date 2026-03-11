module.exports = {
  name: 'setup-rating',
  description: 'أمر setup-rating',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setup-rating');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setup-rating');
  },
};
