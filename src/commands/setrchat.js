module.exports = {
  name: 'setrchat',
  description: 'أمر setrchat',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: setrchat');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: setrchat');
  },
};
