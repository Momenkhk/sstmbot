const fs = require('node:fs');
const path = require('node:path');

const storePath = path.join(process.cwd(), 'guildData.json');

function readStore() {
  if (!fs.existsSync(storePath)) return {};
  try {
    return JSON.parse(fs.readFileSync(storePath, 'utf8'));
  } catch {
    return {};
  }
}

function writeStore(data) {
  fs.writeFileSync(storePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function getGuildData(guildId) {
  const all = readStore();
  if (!all[guildId]) {
    all[guildId] = { settings: {}, warns: {}, autoReplies: {} };
    writeStore(all);
  }
  return all[guildId];
}

function updateGuildData(guildId, updater) {
  const all = readStore();
  if (!all[guildId]) all[guildId] = { settings: {}, warns: {}, autoReplies: {} };
  updater(all[guildId]);
  writeStore(all);
  return all[guildId];
}

module.exports = {
  getGuildData,
  updateGuildData,
};
