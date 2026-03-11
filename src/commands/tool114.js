module.exports = {
  name: 'tool114',
  description: 'أمر tool114 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool114 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool114 شغال.');
  },
};
