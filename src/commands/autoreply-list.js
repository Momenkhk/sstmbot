const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'autoreply-list',
  description: 'أمر autoreply-list',
  category: 'admin',
  adminOnly: true,
});
