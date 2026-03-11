const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'logs-info',
  description: 'أمر logs-info',
  category: 'admin',
  adminOnly: true,
});
