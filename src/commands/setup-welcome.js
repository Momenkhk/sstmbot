module.exports = {
  name: 'setup-welcome',
  description: 'أمر setup-welcome',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setup-welcome');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setup-welcome');
  },
};
