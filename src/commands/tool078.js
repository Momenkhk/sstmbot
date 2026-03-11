module.exports = {
  name: 'tool078',
  description: 'أمر tool078 من الحزمة المتقدمة',
  aliases: [],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool078 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool078 شغال.');
  },
};
