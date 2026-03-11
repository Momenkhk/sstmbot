const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'tcopen',
  description: 'أمر tcopen',
  category: 'admin',
  adminOnly: true,
});
