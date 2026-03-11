const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'moveme',
  description: 'أمر moveme',
  category: 'admin',
  adminOnly: true,
});
