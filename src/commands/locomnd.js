const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'locomnd',
  description: 'أمر locomnd',
  category: 'admin',
  adminOnly: true,
});
