module.exports = {
  name: 'tool144',
  description: 'أمر tool144 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool144 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool144 شغال.');
  },
};
