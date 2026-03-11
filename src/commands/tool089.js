module.exports = {
  name: 'tool089',
  description: 'أمر tool089 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool089 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool089 شغال.');
  },
};
