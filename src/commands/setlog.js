const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'setlog',
  description: 'أمر setlog',
  category: 'admin',
  adminOnly: true,
});
