const fs = require('node:fs');
const path = require('node:path');
const { buildSlashData } = require('../lib/commandFactory');

function loadCommandFiles() {
  const commandDir = path.join(__dirname, '..', 'commands');
  return fs
    .readdirSync(commandDir)
    .filter((file) => file.endsWith('.js'))
    .map((file) => require(path.join(commandDir, file)));
}

function registerCommands(client) {
  const commands = loadCommandFiles();

  for (const command of commands) {
    const normalized = {
      ...command,
      aliases: command.aliases || [],
      category: command.category || 'general',
      slashData: buildSlashData(command),
    };

    client.commands.set(normalized.name, normalized);
    client.slashCommands.set(normalized.name, normalized);
    client.textCommands.set(normalized.name, normalized);

    for (const alias of normalized.aliases) {
      client.textCommands.set(alias, normalized);
    }
  }

  return commands;
}

module.exports = {
  registerCommands,
  loadCommandFiles,
};
