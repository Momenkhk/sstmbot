module.exports = {
  name: 'tool164',
  description: 'أمر tool164 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool164 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool164 شغال.');
  },
};
