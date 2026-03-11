module.exports = {
  name: 'tool173',
  description: 'أمر tool173 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool173 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool173 شغال.');
  },
};
