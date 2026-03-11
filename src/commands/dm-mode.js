module.exports = {
  name: 'dm-mode',
  description: 'أمر dm-mode',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: dm-mode');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: dm-mode');
  },
};
