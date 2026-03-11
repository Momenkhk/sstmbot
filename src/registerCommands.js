const { REST, Routes } = require('discord.js');
const { loadConfig } = require('./utils/config');
const { loadCommandFiles } = require('./handlers/commandHandler');
const { buildSlashData } = require('./lib/commandFactory');

async function main() {
  const config = loadConfig();
  const commands = loadCommandFiles();
  const payload = commands.map((command) => buildSlashData(command).toJSON());

  const rest = new REST({ version: '10' }).setToken(config.token);

  if (config.guildId && !String(config.guildId).startsWith('PUT_')) {
    await rest.put(Routes.applicationGuildCommands(config.clientId, config.guildId), {
      body: payload,
    });
    console.log(`✅ Registered ${payload.length} guild slash commands.`);
    return;
  }

  await rest.put(Routes.applicationCommands(config.clientId), { body: payload });
  console.log(`✅ Registered ${payload.length} global slash commands.`);
}

main().catch((error) => {
  console.error('❌ Failed to register slash commands:', error);
  process.exit(1);
});
