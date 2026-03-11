const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'check',
  description: 'أمر check',
  category: 'admin',
  adminOnly: true,
});
