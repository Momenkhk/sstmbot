module.exports = {
  name: 'tool198',
  description: 'أمر tool198 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool198 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool198 شغال.');
  },
};
