module.exports = {
  name: 'tool225',
  description: 'أمر tool225 من الحزمة المتقدمة',
  aliases: [],
  category: 'protection',
  adminOnly: true,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply('✅ أمر tool225 شغال.');
  },
  async executeText({ message }) {
    await message.reply('✅ أمر tool225 شغال.');
  },
};
