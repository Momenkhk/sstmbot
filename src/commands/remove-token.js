const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'remove-token',
  description: 'أمر remove-token',
  category: 'admin',
  adminOnly: true,
});
