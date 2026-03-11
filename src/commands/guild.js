const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'guild',
  description: 'أمر guild',
  category: 'admin',
  adminOnly: true,
});
