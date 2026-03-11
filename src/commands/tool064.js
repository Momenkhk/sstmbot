module.exports = {
  name: 'tool064',
  description: 'أمر tool064 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool064 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool064 شغال.');
  },
};
