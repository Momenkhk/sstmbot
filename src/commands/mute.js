const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'mute',
  description: 'أمر mute',
  category: 'admin',
  adminOnly: true,
});
