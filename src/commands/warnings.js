module.exports = {
  name: 'warnings',
  description: 'أمر warnings',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: warnings');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: warnings');
  },
};
