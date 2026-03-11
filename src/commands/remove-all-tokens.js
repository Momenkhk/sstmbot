const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'remove-all-tokens',
  description: 'أمر remove-all-tokens',
  category: 'admin',
  adminOnly: true,
});
