const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'dltrchat',
  description: 'أمر dltrchat',
  category: 'admin',
  adminOnly: true,
});
