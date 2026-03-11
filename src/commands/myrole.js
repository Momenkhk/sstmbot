const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'myrole',
  description: 'أمر myrole',
  category: 'admin',
  adminOnly: true,
});
