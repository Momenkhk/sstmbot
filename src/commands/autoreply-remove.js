const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'autoreply-remove',
  description: 'أمر autoreply-remove',
  category: 'admin',
  adminOnly: true,
});
