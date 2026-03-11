module.exports = {
  name: 'tool159',
  description: 'أمر tool159 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool159 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool159 شغال.');
  },
};
