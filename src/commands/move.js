const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'move',
  description: 'أمر move',
  category: 'admin',
  adminOnly: true,
});
