const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'removrole',
  description: 'أمر removrole',
  category: 'admin',
  adminOnly: true,
});
