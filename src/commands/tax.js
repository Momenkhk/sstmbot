const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'tax',
  description: 'أمر tax',
  category: 'admin',
  adminOnly: true,
});
