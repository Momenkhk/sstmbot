module.exports = {
  name: 'setup-logs',
  description: 'أمر setup-logs',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setup-logs');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setup-logs');
  },
};
