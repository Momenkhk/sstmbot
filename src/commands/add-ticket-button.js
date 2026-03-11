module.exports = {
  name: 'add-ticket-button',
  description: 'أمر add-ticket-button',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: add-ticket-button');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: add-ticket-button');
  },
};
