const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'unvmute',
  description: 'أمر unvmute',
  category: 'admin',
  adminOnly: true,
});
