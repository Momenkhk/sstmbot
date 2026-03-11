module.exports = {
  name: 'antilink',
  description: 'أمر antilink',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: antilink');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: antilink');
  },
};
