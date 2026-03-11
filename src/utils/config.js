const fs = require('node:fs');
const path = require('node:path');

const configPath = path.join(process.cwd(), 'config.json');

function loadConfig() {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const config = require(configPath);

  const requiredKeys = ['token', 'clientId', 'defaultStatus', 'defaultWatching', 'owners'];
  for (const key of requiredKeys) {
    if (config[key] === undefined || config[key] === null || String(config[key]).startsWith('PUT_')) {
      throw new Error(`config.json missing a valid value for: ${key}`);
    }
  }

  if (!Array.isArray(config.owners)) {
    throw new Error('config.json owners must be an array');
  }

  return config;
}

function saveOwners(owners) {
  const config = loadConfig();
  config.owners = owners;
  fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`, 'utf8');
}

module.exports = {
  loadConfig,
  saveOwners,
};
