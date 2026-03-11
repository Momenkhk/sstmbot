const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'remove-user',
  description: 'أمر remove-user',
  category: 'admin',
  adminOnly: true,
});
