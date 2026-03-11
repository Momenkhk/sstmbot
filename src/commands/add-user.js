const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'add-user',
  description: 'أمر add-user',
  category: 'admin',
  adminOnly: true,
});
