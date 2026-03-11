module.exports = {
  name: 'add-info-button',
  description: 'أمر add-info-button',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: add-info-button');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: add-info-button');
  },
};
