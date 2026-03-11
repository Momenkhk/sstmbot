module.exports = {
  name: 'antispam',
  description: 'أمر antispam',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: antispam');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: antispam');
  },
};
