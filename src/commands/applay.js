const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'applay',
  description: 'أمر applay',
  category: 'admin',
  adminOnly: true,
});
