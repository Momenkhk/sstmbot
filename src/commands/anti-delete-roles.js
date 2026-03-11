const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'anti-delete-roles',
  description: 'أمر anti-delete-roles',
  category: 'admin',
  adminOnly: true,
});
