const { normalizeStatus, applyPresence } = require('../utils/presenceManager');

function parseArgs(statusInput, watchingInput) {
  const status = normalizeStatus(statusInput);
  const watching = String(watchingInput || '').trim();
  return { status, watching };
}

module.exports = {
  name: 'status',
  description: 'تغيير حالة البوت + watching',
  aliases: [],
  category: 'bot-control',
  adminOnly: false,
  ownerOnly: true,
  options: [
    (builder) =>
      builder.addStringOption((opt) =>
        opt
          .setName('state')
          .setDescription('online / idle / dnd')
          .setRequired(true)
          .addChoices(
            { name: 'online', value: 'online' },
            { name: 'idle', value: 'idle' },
            { name: 'dnd', value: 'dnd' },
          ),
      ),
    (builder) =>
      builder.addStringOption((opt) => opt.setName('watching').setDescription('النص').setRequired(true)),
  ],
  async executeSlash(interaction) {
    const { status, watching } = parseArgs(
      interaction.options.getString('state'),
      interaction.options.getString('watching'),
    );

    if (!status || !watching) {
      await interaction.reply({ content: '❌ الاستخدام: /status state watching', ephemeral: true });
      return;
    }

    applyPresence(interaction.client, status, watching);
    interaction.client.runtime.status = status;
    interaction.client.runtime.watching = watching;

    await interaction.reply(`✅ الحالة: **${status}** | Watching: **${watching}**`);
  },
  async executeText({ client, message, args }) {
    const [rawStatus, ...watchingParts] = args;
    const { status, watching } = parseArgs(rawStatus, watchingParts.join(' '));

    if (!status || !watching) {
      await message.reply('❌ الاستخدام الصحيح: `status <dnd|online|idle> <watching text>`');
      return;
    }

    applyPresence(client, status, watching);
    client.runtime.status = status;
    client.runtime.watching = watching;

    await message.reply(`✅ الحالة: **${status}** | Watching: **${watching}**`);
  },
};
