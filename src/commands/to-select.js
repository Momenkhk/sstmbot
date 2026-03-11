module.exports = {
  name: 'to-select',
  description: 'أمر to-select',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: to-select');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: to-select');
  },
};
