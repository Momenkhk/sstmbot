module.exports = {
  name: 'tool232',
  description: 'أمر tool232 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool232 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool232 شغال.');
  },
};
