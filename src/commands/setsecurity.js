const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setsecurity',
  description: 'أمر setsecurity',
  category: 'admin',
  adminOnly: true,
});
