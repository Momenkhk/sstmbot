module.exports = {
  name: 'tool115',
  description: 'أمر tool115 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool115 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool115 شغال.');
  },
};
