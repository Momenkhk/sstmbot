const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'live',
  description: 'أمر live',
  category: 'admin',
  adminOnly: true,
});
