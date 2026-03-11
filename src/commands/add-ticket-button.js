const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'add-ticket-button',
  description: 'أمر add-ticket-button',
  category: 'admin',
  adminOnly: true,
});
