const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'daorole',
  description: 'أمر daorole',
  category: 'admin',
  adminOnly: true,
});
