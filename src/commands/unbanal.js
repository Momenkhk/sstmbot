module.exports = {
  name: 'unbanal',
  description: 'أمر unbanal',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: unbanal');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: unbanal');
  },
};
