module.exports = {
  name: 'tool086',
  description: 'أمر tool086 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool086 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool086 شغال.');
  },
};
