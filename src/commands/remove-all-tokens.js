module.exports = {
  name: 'remove-all-tokens',
  description: 'أمر remove-all-tokens',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: remove-all-tokens');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: remove-all-tokens');
  },
};
