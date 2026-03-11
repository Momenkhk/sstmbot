module.exports = {
  name: 'new-panel',
  description: 'أمر new-panel',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: new-panel');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: new-panel');
  },
};
