const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'lock',
  description: 'أمر lock',
  category: 'admin',
  adminOnly: true,
});
