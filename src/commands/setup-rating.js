const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setup-rating',
  description: 'أمر setup-rating',
  category: 'admin',
  adminOnly: true,
});
