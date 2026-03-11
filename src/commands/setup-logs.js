const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setup-logs',
  description: 'أمر setup-logs',
  category: 'admin',
  adminOnly: true,
});
