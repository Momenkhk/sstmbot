const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'set-ticket-log',
  description: 'أمر set-ticket-log',
  category: 'admin',
  adminOnly: true,
});
