const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'roles',
  description: 'أمر roles',
  category: 'general',
  adminOnly: false,
});
