const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'anti-delete-rooms',
  description: 'أمر anti-delete-rooms',
  category: 'admin',
  adminOnly: true,
});
