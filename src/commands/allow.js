module.exports = {
  name: 'allow',
  description: 'أمر allow',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: allow');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: allow');
  },
};
