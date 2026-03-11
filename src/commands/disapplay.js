const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'disapplay',
  description: 'أمر disapplay',
  category: 'admin',
  adminOnly: true,
});
