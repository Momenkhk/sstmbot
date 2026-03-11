const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'line-mode',
  description: 'أمر line-mode',
  category: 'admin',
  adminOnly: true,
});
