const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'mshow',
  description: 'أمر mshow',
  category: 'admin',
  adminOnly: true,
});
