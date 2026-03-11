const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'gstart',
  description: 'أمر gstart',
  category: 'admin',
  adminOnly: true,
});
