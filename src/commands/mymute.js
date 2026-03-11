const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'mymute',
  description: 'أمر mymute',
  category: 'admin',
  adminOnly: true,
});
