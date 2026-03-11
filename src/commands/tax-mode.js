const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'tax-mode',
  description: 'أمر tax-mode',
  category: 'admin',
  adminOnly: true,
});
