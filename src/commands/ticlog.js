const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'ticlog',
  description: 'أمر ticlog',
  category: 'admin',
  adminOnly: true,
});
