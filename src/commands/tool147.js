module.exports = {
  name: 'tool147',
  description: 'أمر tool147 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool147 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool147 شغال.');
  },
};
