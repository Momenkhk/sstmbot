module.exports = {
  name: 'ochat',
  description: 'أمر ochat',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: ochat');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: ochat');
  },
};
