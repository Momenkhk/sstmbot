const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'unpic',
  description: 'أمر unpic',
  category: 'admin',
  adminOnly: true,
});
