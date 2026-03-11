const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'remove-warn',
  description: 'أمر remove-warn',
  category: 'admin',
  adminOnly: true,
});
