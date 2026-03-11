const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'cmunprefix',
  description: 'أمر cmunprefix',
  category: 'admin',
  adminOnly: true,
});
