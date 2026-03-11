const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'unline',
  description: 'أمر unline',
  category: 'admin',
  adminOnly: true,
});
