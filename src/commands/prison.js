const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'prison',
  description: 'أمر prison',
  category: 'admin',
  adminOnly: true,
});
