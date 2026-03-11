const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'deny',
  description: 'أمر deny',
  category: 'admin',
  adminOnly: true,
});
