const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'gend',
  description: 'أمر gend',
  category: 'admin',
  adminOnly: true,
});
