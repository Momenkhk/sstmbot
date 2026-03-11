module.exports = {
  name: 'tool056',
  description: 'أمر tool056 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool056 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool056 شغال.');
  },
};
