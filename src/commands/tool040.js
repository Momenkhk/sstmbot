module.exports = {
  name: 'tool040',
  description: 'أمر tool040 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool040 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool040 شغال.');
  },
};
