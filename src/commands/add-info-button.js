const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'add-info-button',
  description: 'أمر add-info-button',
  category: 'admin',
  adminOnly: true,
});
