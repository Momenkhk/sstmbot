module.exports = {
  name: 'reset-all',
  description: 'أمر reset-all',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: reset-all');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: reset-all');
  },
};
