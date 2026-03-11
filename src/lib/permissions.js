const { PermissionFlagsBits } = require('discord.js');

function isOwner(client, userId) {
  return client.runtime.owners.includes(userId);
}

function isAdmin(member) {
  return member?.permissions?.has(PermissionFlagsBits.Administrator);
}

function getPermissionError(command) {
  if (command.ownerOnly) return '❌ الأمر ده للـ Owner فقط.';
  if (command.adminOnly) return '❌ الأمر ده يحتاج صلاحية Administrator.';
  return null;
}

function canRunCommand({ client, command, userId, member }) {
  if (command.ownerOnly) {
    return isOwner(client, userId);
  }

  if (command.adminOnly) {
    return isAdmin(member) || isOwner(client, userId);
  }

  return true;
}

module.exports = {
  isOwner,
  isAdmin,
  canRunCommand,
  getPermissionError,
};
