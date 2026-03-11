const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'unprison',
  description: 'أمر unprison',
  category: 'admin',
  adminOnly: true,
});
