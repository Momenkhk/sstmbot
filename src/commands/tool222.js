module.exports = {
  name: 'tool222',
  description: 'أمر tool222 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool222 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool222 شغال.');
  },
};
