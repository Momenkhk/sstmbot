const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
  Events,
} = require('discord.js');
const { loadConfig } = require('./utils/config');
const { applyPresence } = require('./utils/presenceManager');
const { registerCommands } = require('./handlers/commandHandler');
const { handleMessage } = require('./handlers/messageHandler');
const { canRunCommand, getPermissionError } = require('./lib/permissions');

const config = loadConfig();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.commands = new Collection();
client.slashCommands = new Collection();
client.textCommands = new Collection();
client.runtime = {
  owners: [...config.owners],
  status: config.defaultStatus,
  watching: config.defaultWatching,
  line: '━━━━━━━━━━━━━━━━━━',
};

registerCommands(client);

client.once(Events.ClientReady, async (readyClient) => {
  applyPresence(readyClient, client.runtime.status, client.runtime.watching);
  console.log(`✅ Logged in as ${readyClient.user.tag} | commands: ${client.commands.size}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.slashCommands.get(interaction.commandName);
  if (!command) return;

  if (!canRunCommand({ client, command, userId: interaction.user.id, member: interaction.member })) {
    await interaction.reply({ content: getPermissionError(command), ephemeral: true });
    return;
  }

  try {
    await command.executeSlash(interaction);
  } catch (error) {
    console.error(`Slash command failed: ${interaction.commandName}`, error);
    const payload = { content: '❌ حصل خطأ أثناء تنفيذ الأمر.', ephemeral: true };
    if (interaction.deferred || interaction.replied) {
      await interaction.followUp(payload);
    } else {
      await interaction.reply(payload);
    }
  }
});

client.on(Events.MessageCreate, async (message) => {
  await handleMessage(client, message);
});

client.login(config.token);
