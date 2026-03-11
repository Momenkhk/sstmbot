module.exports = {
  name: 'remove-autoline-channel',
  description: 'أمر remove-autoline-channel',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: remove-autoline-channel');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: remove-autoline-channel');
  },
};
