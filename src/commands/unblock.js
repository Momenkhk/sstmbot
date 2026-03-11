const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'unblock',
  description: 'أمر unblock',
  category: 'admin',
  adminOnly: true,
});
