const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'word',
  description: 'أمر word',
  category: 'admin',
  adminOnly: true,
});
