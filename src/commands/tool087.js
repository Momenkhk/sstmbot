module.exports = {
  name: 'tool087',
  description: 'أمر tool087 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool087 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool087 شغال.');
  },
};
