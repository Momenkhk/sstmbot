const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'set-tax-line',
  description: 'أمر set-tax-line',
  category: 'admin',
  adminOnly: true,
});
