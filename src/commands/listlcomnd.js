const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'listlcomnd',
  description: 'أمر listlcomnd',
  category: 'admin',
  adminOnly: true,
});
