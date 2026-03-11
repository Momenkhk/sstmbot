const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'dm',
  description: 'أمر dm',
  category: 'admin',
  adminOnly: true,
});
