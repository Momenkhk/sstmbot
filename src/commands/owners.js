const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'owners',
  description: 'أمر owners',
  category: 'admin',
  adminOnly: true,
});
