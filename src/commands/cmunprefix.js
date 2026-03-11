module.exports = {
  name: 'cmunprefix',
  description: 'أمر cmunprefix',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: cmunprefix');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: cmunprefix');
  },
};
