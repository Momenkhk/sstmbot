const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'unban',
  description: 'أمر unban',
  category: 'admin',
  adminOnly: true,
});
