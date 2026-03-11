const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'warn',
  description: 'أمر warn',
  category: 'admin',
  adminOnly: true,
});
