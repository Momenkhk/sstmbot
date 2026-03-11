const { createManagedCommand } = require('../lib/managedCommand');

module.exports = createManagedCommand({
  name: 'server',
  description: 'أمر server',
  category: 'general',
  adminOnly: false,
});
