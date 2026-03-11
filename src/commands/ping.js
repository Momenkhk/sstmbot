const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'ping',
  description: 'أمر ping',
  category: 'general',
  adminOnly: false,
});
