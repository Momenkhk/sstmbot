const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'myprison',
  description: 'أمر myprison',
  category: 'admin',
  adminOnly: true,
});
