module.exports = {
  name: 'tool153',
  description: 'أمر tool153 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool153 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool153 شغال.');
  },
};
