module.exports = {
  name: 'set-autoline-line',
  description: 'أمر set-autoline-line',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: set-autoline-line');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: set-autoline-line');
  },
};
