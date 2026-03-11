module.exports = {
  name: 'tool132',
  description: 'أمر tool132 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool132 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool132 شغال.');
  },
};
