const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'wantilist',
  description: 'أمر wantilist',
  category: 'admin',
  adminOnly: true,
});
