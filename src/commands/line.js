module.exports = {
  name: 'line',
  description: 'تحديد الخط/الفاصل',
  aliases: ['setline'],
  category: 'bot-control',
  adminOnly: false,
  ownerOnly: true,
  options: [
    (builder) => builder.addStringOption((opt) => opt.setName('text').setDescription('الخط').setRequired(true)),
  ],
  async executeSlash(interaction) {
    const line = interaction.options.getString('text');
    interaction.client.runtime.line = line;
    await interaction.reply(`✅ تم تحديد الخط:\n${line}`);
  },
  async executeText({ client, message, args }) {
    const line = args.join(' ').trim();
    if (!line) {
      await message.reply('❌ الاستخدام: `line <الخط>`');
      return;
    }
    client.runtime.line = line;
    await message.reply(`✅ تم تحديد الخط:\n${line}`);
  },
};
