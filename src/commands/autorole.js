const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'autorole',
  description: 'أمر autorole',
  category: 'admin',
  adminOnly: true,
});
