module.exports = {
  name: 'wlc',
  description: 'أمر wlc',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: wlc');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: wlc');
  },
};
