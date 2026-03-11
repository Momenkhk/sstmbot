const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'removeshortcut',
  description: 'أمر removeshortcut',
  category: 'admin',
  adminOnly: true,
});
