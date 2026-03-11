const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'detlog',
  description: 'أمر detlog',
  category: 'admin',
  adminOnly: true,
});
