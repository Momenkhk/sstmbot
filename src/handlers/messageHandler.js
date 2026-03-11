const { canRunCommand, getPermissionError } = require('../lib/permissions');

async function handleMessage(client, message) {
  if (message.author.bot || !message.guild) return;

  const content = message.content.trim();
  if (!content) return;

  const [rawName, ...args] = content.split(/\s+/);
  const name = rawName.toLowerCase();
  const command = client.textCommands.get(name);
  if (!command) return;

  if (!canRunCommand({ client, command, userId: message.author.id, member: message.member })) {
    await message.reply(getPermissionError(command));
    return;
  }

  try {
    await command.executeText({ client, message, args });
  } catch (error) {
    console.error(`Text command failed: ${name}`, error);
    await message.reply('❌ حصل خطأ أثناء تنفيذ الأمر.');
  }
}

module.exports = {
  handleMessage,
};
