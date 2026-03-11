module.exports = {
  name: 'tool108',
  description: 'أمر tool108 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool108 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool108 شغال.');
  },
};
