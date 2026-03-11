const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'dsrole',
  description: 'أمر dsrole',
  category: 'admin',
  adminOnly: true,
});
