module.exports = {
  name: 'khat',
  description: 'إرسال الخط المحفوظ (alias: خط)',
  aliases: ['خط'],
  category: 'general',
  adminOnly: false,
  ownerOnly: false,
  options: [],
  async executeSlash(interaction) {
    await interaction.reply(interaction.client.runtime.line);
  },
  async executeText({ message, client }) {
    if (message.deletable) {
      await message.delete().catch(() => null);
    }
    await message.channel.send(client.runtime.line);
  },
};
