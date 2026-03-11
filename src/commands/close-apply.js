module.exports = {
  name: 'close-apply',
  description: 'أمر close-apply',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: close-apply');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: close-apply');
  },
};
