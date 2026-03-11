module.exports = {
  name: 'tool148',
  description: 'أمر tool148 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool148 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool148 شغال.');
  },
};
