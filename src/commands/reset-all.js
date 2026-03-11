const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'reset-all',
  description: 'أمر reset-all',
  category: 'admin',
  adminOnly: true,
});
