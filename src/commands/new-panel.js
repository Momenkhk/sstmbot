const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'new-panel',
  description: 'أمر new-panel',
  category: 'admin',
  adminOnly: true,
});
