const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'set-message',
  description: 'أمر set-message',
  category: 'admin',
  adminOnly: true,
});
