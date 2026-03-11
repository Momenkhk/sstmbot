const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'dreply',
  description: 'أمر dreply',
  category: 'admin',
  adminOnly: true,
});
