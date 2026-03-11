const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'set-shortcut',
  description: 'أمر set-shortcut',
  category: 'admin',
  adminOnly: true,
});
