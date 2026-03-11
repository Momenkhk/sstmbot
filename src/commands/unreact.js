const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'unreact',
  description: 'أمر unreact',
  category: 'admin',
  adminOnly: true,
});
