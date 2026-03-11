module.exports = {
  name: 'send-broadcast-panel',
  description: 'أمر send-broadcast-panel',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: send-broadcast-panel');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: send-broadcast-panel');
  },
};
