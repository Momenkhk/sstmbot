module.exports = {
  name: 'remove-nadeko-room',
  description: 'أمر remove-nadeko-room',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: remove-nadeko-room');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: remove-nadeko-room');
  },
};
