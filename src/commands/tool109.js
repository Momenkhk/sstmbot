module.exports = {
  name: 'tool109',
  description: 'أمر tool109 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool109 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool109 شغال.');
  },
};
