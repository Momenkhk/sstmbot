module.exports = {
  name: 'setup-ticket',
  description: 'أمر setup-ticket',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setup-ticket');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setup-ticket');
  },
};
