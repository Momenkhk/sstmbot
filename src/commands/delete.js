const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'delete',
  description: 'أمر delete',
  category: 'admin',
  adminOnly: true,
});
