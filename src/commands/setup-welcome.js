const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setup-welcome',
  description: 'أمر setup-welcome',
  category: 'admin',
  adminOnly: true,
});
