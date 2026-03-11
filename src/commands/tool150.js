module.exports = {
  name: 'tool150',
  description: 'أمر tool150 من الحزمة المتقدمة',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool150 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool150 شغال.');
  },
};
