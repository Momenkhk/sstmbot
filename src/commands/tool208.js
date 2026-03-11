module.exports = {
  name: 'tool208',
  description: 'أمر tool208 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool208 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool208 شغال.');
  },
};
