const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'wanti',
  description: 'أمر wanti',
  category: 'admin',
  adminOnly: true,
});
