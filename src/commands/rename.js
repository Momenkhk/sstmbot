const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'rename',
  description: 'أمر rename',
  category: 'admin',
  adminOnly: true,
});
