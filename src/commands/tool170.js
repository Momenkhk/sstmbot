module.exports = {
  name: 'tool170',
  description: 'أمر tool170 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool170 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool170 شغال.');
  },
};
