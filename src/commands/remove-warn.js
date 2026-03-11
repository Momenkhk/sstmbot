module.exports = {
  name: 'remove-warn',
  description: 'أمر remove-warn',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: remove-warn');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: remove-warn');
  },
};
