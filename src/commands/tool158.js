module.exports = {
  name: 'tool158',
  description: 'أمر tool158 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool158 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool158 شغال.');
  },
};
