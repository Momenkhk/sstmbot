module.exports = {
  name: 'stickers',
  description: 'أمر stickers',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: stickers');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: stickers');
  },
};
