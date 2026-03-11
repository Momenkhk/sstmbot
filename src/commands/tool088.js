module.exports = {
  name: 'tool088',
  description: 'أمر tool088 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool088 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool088 شغال.');
  },
};
