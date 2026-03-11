module.exports = {
  name: 'addrole',
  description: 'أمر addrole',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: addrole');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: addrole');
  },
};
