module.exports = {
  name: 'slowmode',
  description: 'أمر slowmode',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: slowmode');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: slowmode');
  },
};
