module.exports = {
  name: 'tool160',
  description: 'أمر tool160 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool160 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool160 شغال.');
  },
};
