module.exports = {
  name: 'protection-status',
  description: 'أمر protection-status',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: protection-status');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: protection-status');
  },
};
