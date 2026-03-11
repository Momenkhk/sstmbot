const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'unbanal',
  description: 'أمر unbanal',
  category: 'admin',
  adminOnly: true,
});
