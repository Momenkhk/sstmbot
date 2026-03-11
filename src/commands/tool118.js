module.exports = {
  name: 'tool118',
  description: 'أمر tool118 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool118 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool118 شغال.');
  },
};
