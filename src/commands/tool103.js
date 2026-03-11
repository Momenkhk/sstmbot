module.exports = {
  name: 'tool103',
  description: 'أمر tool103 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool103 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool103 شغال.');
  },
};
