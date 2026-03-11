module.exports = {
  name: 'move',
  description: 'أمر move',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: move');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: move');
  },
};
