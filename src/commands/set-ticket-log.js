module.exports = {
  name: 'set-ticket-log',
  description: 'أمر set-ticket-log',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: set-ticket-log');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: set-ticket-log');
  },
};
