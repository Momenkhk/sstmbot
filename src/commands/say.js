module.exports = {
  name: 'say',
  description: 'إرسال رسالة من البوت',
  aliases: [],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [
    (builder) => builder.addStringOption((opt) => opt.setName('text').setDescription('النص').setRequired(true)),
  ],
  async executeSlash(interaction) {
    const text = interaction.options.getString('text', true);
    await interaction.channel.send(text);
    await interaction.reply({ content: '✅ تم الإرسال.', ephemeral: true });
  },
  async executeText({ message, args }) {
    const text = args.join(' ').trim();
    if (!text) {
      await message.reply('❌ الاستخدام: `say <text>`');
      return;
    }
    await message.channel.send(text);
  },
};
