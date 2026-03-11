module.exports = {
  name: 'come',
  description: 'سحب عضو إلى رومك الصوتي',
  aliases: ['summon'],
  category: 'admin',
  adminOnly: true,
  ownerOnly: false,
  options: [
    (builder) =>
      builder.addUserOption((opt) => opt.setName('user').setDescription('العضو المطلوب').setRequired(true)),
  ],
  async executeSlash(interaction) {
    const target = interaction.options.getMember('user');
    const authorChannel = interaction.member.voice?.channel;

    if (!authorChannel) {
      await interaction.reply({ content: '❌ ادخل روم صوتي أولًا.', ephemeral: true });
      return;
    }
    if (!target?.voice?.channel) {
      await interaction.reply({ content: '❌ العضو ليس في روم صوتي.', ephemeral: true });
      return;
    }

    await target.voice.setChannel(authorChannel);
    await interaction.reply(`✅ تم سحب ${target} إلى ${authorChannel}.`);
  },
  async executeText({ message, args }) {
    const id = args[0]?.replace(/\D/g, '');
    const target = id ? await message.guild.members.fetch(id).catch(() => null) : null;
    const authorChannel = message.member.voice?.channel;

    if (!authorChannel) {
      await message.reply('❌ ادخل روم صوتي أولًا.');
      return;
    }
    if (!target?.voice?.channel) {
      await message.reply('❌ العضو ليس في روم صوتي.');
      return;
    }

    await target.voice.setChannel(authorChannel);
    await message.reply(`✅ تم سحب ${target} إلى ${authorChannel}.`);
  },
};
