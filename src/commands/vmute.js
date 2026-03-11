const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'vmute',
  description: 'أمر vmute',
  category: 'admin',
  adminOnly: true,
});
