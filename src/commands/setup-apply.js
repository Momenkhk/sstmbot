const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setup-apply',
  description: 'أمر setup-apply',
  category: 'admin',
  adminOnly: true,
});
