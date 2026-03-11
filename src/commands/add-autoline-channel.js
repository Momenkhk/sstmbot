module.exports = {
  name: 'add-autoline-channel',
  description: 'أمر add-autoline-channel',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: add-autoline-channel');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: add-autoline-channel');
  },
};
