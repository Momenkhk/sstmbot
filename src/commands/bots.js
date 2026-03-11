module.exports = {
  name: 'bots',
  description: 'عرض عدد البوتات في السيرفر',
  aliases: ['botcount'],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    const bots = interaction.guild.members.cache.filter((m) => m.user.bot).size;
    await interaction.reply(`🤖 عدد البوتات: **${bots}**`);
  },
  async executeText({ message }) {
    const bots = message.guild.members.cache.filter((m) => m.user.bot).size;
    await message.reply(`🤖 عدد البوتات: **${bots}**`);
  },
};
