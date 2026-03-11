module.exports = {
  name: 'live',
  description: 'أمر live',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: live');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: live');
  },
};
