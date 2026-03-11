module.exports = {
  name: 'tool125',
  description: 'أمر tool125 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool125 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool125 شغال.');
  },
};
