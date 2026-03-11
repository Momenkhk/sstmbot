const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'to-select',
  description: 'أمر to-select',
  category: 'admin',
  adminOnly: true,
});
