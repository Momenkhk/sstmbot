module.exports = {
  name: 'set-protect-logs',
  description: 'أمر set-protect-logs',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: set-protect-logs');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: set-protect-logs');
  },
};
