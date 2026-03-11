const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'srole',
  description: 'أمر srole',
  category: 'admin',
  adminOnly: true,
});
