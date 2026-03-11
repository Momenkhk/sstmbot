module.exports = {
  name: 'new-apply',
  description: 'أمر new-apply',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: new-apply');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: new-apply');
  },
};
