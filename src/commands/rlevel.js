const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'rlevel',
  description: 'أمر rlevel',
  category: 'admin',
  adminOnly: true,
});
