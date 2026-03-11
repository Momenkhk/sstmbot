const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'autoline',
  description: 'أمر autoline',
  category: 'admin',
  adminOnly: true,
});
