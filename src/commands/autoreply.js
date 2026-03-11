const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'autoreply',
  description: 'أمر autoreply',
  category: 'admin',
  adminOnly: true,
});
