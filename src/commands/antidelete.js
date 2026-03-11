module.exports = {
  name: 'antidelete',
  description: 'أمر antidelete',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: antidelete');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: antidelete');
  },
};
