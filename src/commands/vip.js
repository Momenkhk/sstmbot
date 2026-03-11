const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'vip',
  description: 'أمر vip',
  category: 'admin',
  adminOnly: true,
});
