const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'tcrestart',
  description: 'أمر tcrestart',
  category: 'admin',
  adminOnly: true,
});
