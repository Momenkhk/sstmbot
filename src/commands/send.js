const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'send',
  description: 'أمر send',
  category: 'admin',
  adminOnly: true,
});
