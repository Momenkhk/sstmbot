module.exports = {
  name: 'tool085',
  description: 'أمر tool085 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool085 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool085 شغال.');
  },
};
