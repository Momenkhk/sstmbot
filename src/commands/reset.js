module.exports = {
  name: 'reset',
  description: 'أمر reset',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: reset');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: reset');
  },
};
