module.exports = {
  name: 'ping',
  description: 'أمر ping',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: ping');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: ping');
  },
};
