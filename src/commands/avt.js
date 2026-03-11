const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'avt',
  description: 'أمر avt',
  category: 'admin',
  adminOnly: true,
});
