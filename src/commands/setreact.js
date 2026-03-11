const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setreact',
  description: 'أمر setreact',
  category: 'admin',
  adminOnly: true,
});
