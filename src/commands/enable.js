const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'enable',
  description: 'أمر enable',
  category: 'admin',
  adminOnly: true,
});
