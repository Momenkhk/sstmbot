module.exports = {
  name: 'tool083',
  description: 'أمر tool083 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool083 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool083 شغال.');
  },
};
