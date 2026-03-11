module.exports = {
  name: 'imagechat',
  description: 'أمر imagechat',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ تم تنفيذ الأمر: imagechat');
  },
  async executeText({ message }) {
    await message.reply('✅ تم تنفيذ الأمر: imagechat');
  },
};
