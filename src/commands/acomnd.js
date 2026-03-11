module.exports = {
  name: 'acomnd',
  description: 'أمر acomnd',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: acomnd');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: acomnd');
  },
};
