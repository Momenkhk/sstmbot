const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'add-button',
  description: 'أمر add-button',
  category: 'admin',
  adminOnly: true,
});
