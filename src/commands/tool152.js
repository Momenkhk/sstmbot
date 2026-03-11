module.exports = {
  name: 'tool152',
  description: 'أمر tool152 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool152 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool152 شغال.');
  },
};
