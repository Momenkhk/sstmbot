module.exports = {
  name: 'setup-apply',
  description: 'أمر setup-apply',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setup-apply');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setup-apply');
  },
};
