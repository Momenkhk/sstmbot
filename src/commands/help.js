const { buildHelpEmbed } = require('../utils/helpEmbed');

module.exports = {
  name: 'help',
  description: 'عرض لوحة المساعدة الرئيسية',
  aliases: ['commands'],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply({ embeds: [buildHelpEmbed(interaction.client)] });
  },
  async executeText({ message, client }) {
    await message.reply({ embeds: [buildHelpEmbed(client)] });
  },
};
