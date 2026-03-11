const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'warnings',
  description: 'أمر warnings',
  category: 'admin',
  adminOnly: true,
});
