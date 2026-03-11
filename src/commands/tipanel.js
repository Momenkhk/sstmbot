const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'tipanel',
  description: 'أمر tipanel',
  category: 'admin',
  adminOnly: true,
});
