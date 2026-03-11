const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'slowmode',
  description: 'أمر slowmode',
  category: 'admin',
  adminOnly: true,
});
