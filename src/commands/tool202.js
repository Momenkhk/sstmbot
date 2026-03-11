module.exports = {
  name: 'tool202',
  description: 'أمر tool202 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool202 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool202 شغال.');
  },
};
