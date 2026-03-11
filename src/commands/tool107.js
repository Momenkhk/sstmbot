module.exports = {
  name: 'tool107',
  description: 'أمر tool107 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool107 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool107 شغال.');
  },
};
