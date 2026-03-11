const { ActivityType } = require('discord.js');

const ALLOWED_STATUS = new Set(['online', 'idle', 'dnd']);

function normalizeStatus(input) {
  const status = String(input || '').toLowerCase();
  return ALLOWED_STATUS.has(status) ? status : null;
}

function applyPresence(client, status, watchingText) {
  client.user.setPresence({
    status,
    activities: [{ type: ActivityType.Watching, name: watchingText }],
  });
}

module.exports = {
  ALLOWED_STATUS,
  normalizeStatus,
  applyPresence,
};
