const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setup-ticket',
  description: 'أمر setup-ticket',
  category: 'admin',
  adminOnly: true,
});
