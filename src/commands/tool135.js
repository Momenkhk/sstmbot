module.exports = {
  name: 'tool135',
  description: 'أمر tool135 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool135 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool135 شغال.');
  },
};
