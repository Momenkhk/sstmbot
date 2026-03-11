module.exports = {
  name: 'tool229',
  description: 'أمر tool229 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool229 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool229 شغال.');
  },
};
