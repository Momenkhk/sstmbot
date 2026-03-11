module.exports = {
  name: 'add-button',
  description: 'أمر add-button',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: add-button');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: add-button');
  },
};
