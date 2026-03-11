const {
  SlashCommandBuilder,
  PermissionFlagsBits,
} = require('discord.js');

function buildSlashData(command) {
  let builder = new SlashCommandBuilder()
    .setName(command.name)
    .setDescription(command.description || 'No description');

  if (Array.isArray(command.options)) {
    for (const option of command.options) {
      builder = option(builder);
    }
  }

  if (command.adminOnly && !command.ownerOnly) {
    builder.setDefaultMemberPermissions(PermissionFlagsBits.Administrator);
  }

  if (command.ownerOnly) {
    builder.setDefaultMemberPermissions(0);
  }

  return builder;
}

module.exports = {
  buildSlashData,
};
