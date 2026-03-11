module.exports = {
  name: 'disapplay',
  description: 'أمر disapplay',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: disapplay');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: disapplay');
  },
};
