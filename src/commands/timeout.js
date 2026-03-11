const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'timeout',
  description: 'أمر timeout',
  category: 'admin',
  adminOnly: true,
});
