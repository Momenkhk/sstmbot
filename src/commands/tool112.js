module.exports = {
  name: 'tool112',
  description: 'أمر tool112 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool112 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool112 شغال.');
  },
};
