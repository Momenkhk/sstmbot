module.exports = {
  name: 'add-nadeko-room',
  description: 'أمر add-nadeko-room',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: add-nadeko-room');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: add-nadeko-room');
  },
};
