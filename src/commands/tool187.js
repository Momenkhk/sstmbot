module.exports = {
  name: 'tool187',
  description: 'أمر tool187 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool187 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool187 شغال.');
  },
};
