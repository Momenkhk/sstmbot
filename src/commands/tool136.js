module.exports = {
  name: 'tool136',
  description: 'أمر tool136 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool136 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool136 شغال.');
  },
};
