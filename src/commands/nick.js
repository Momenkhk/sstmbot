const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'nick',
  description: 'أمر nick',
  category: 'admin',
  adminOnly: true,
});
