module.exports = {
  name: 'anti-delete-roles',
  description: 'أمر anti-delete-roles',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: anti-delete-roles');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: anti-delete-roles');
  },
};
