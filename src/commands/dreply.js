module.exports = {
  name: 'dreply',
  description: 'أمر dreply',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: dreply');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: dreply');
  },
};
