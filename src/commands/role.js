const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'role',
  description: 'أمر role',
  category: 'admin',
  adminOnly: true,
});
