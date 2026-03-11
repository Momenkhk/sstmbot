const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'here',
  description: 'أمر here',
  category: 'admin',
  adminOnly: true,
});
