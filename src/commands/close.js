const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'close',
  description: 'أمر close',
  category: 'admin',
  adminOnly: true,
});
