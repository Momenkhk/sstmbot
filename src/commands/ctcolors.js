const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'ctcolors',
  description: 'أمر ctcolors',
  category: 'admin',
  adminOnly: true,
});
